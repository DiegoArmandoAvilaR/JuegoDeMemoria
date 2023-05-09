const cards = [
  "javascript",
  "python",
  "java",
  "kotlin",
  "ruby",
  "swift",
  "php",
  "go",
  "javascript",
  "python",
  "java",
  "kotlin",
  "ruby",
  "swift",
  "php",
  "go"

];

let flippedCards = [];
let matchedCards = [];
let moves = 0;
let resultDisplay = document.querySelector("#result-display");
let game = document.querySelector("#game");

// Shuffle the cards array
function shuffleCards() {
  cards.sort(() => Math.random() - 0.5);
}

// Create the game board with shuffled cards
function createBoard() {
  shuffleCards();
  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "diego.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    game.appendChild(card);
  }
}

// Flip the card and show the programming language
function flipCard() {
  let cardId = this.getAttribute("data-id");
  this.setAttribute("src", `${cards[cardId]}.png`);
  flippedCards.push(this);
  if (flippedCards.length === 2) {
    moves++;
    if (flippedCards[0].getAttribute("data-id") === flippedCards[1].getAttribute("data-id")) {
      matchedCards.push(flippedCards[0]);
      matchedCards.push(flippedCards[1]);
      flippedCards = [];
      if (matchedCards.length === cards.length) {
        alert(`You won in ${moves} moves!`);
      }
    } else {
      setTimeout(() => {
        flippedCards[0].setAttribute("src", "diego.png");
        flippedCards[1].setAttribute("src", "diego.png");
        flippedCards = [];
      }, 1000);
    }
    resultDisplay.innerHTML = moves;
  }
}

createBoard();