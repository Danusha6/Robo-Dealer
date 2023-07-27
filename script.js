// Define a Card object with 'value' and 'suit' properties.
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

// Define an array of 52 Card objects to represent all unique cards in a deck.
const deck = [];
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

for (const suit of suits) {
  for (const value of values) {
    deck.push(new Card(value, suit));
  }
}

// Function to get a random hand
function getRandomHand() {
  const hand = [];
  const usedIndexes = new Set();

  while (hand.length < 5) {
    const randomIndex = Math.floor(Math.random() * 52);
    if (!usedIndexes.has(randomIndex)) {
      hand.push(deck[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return hand;
}

// Function to display the hand on the page
function displayHand(hand) {
  const handContainer = document.getElementById('hand');
  handContainer.innerHTML = '';

  for (const card of hand) {
    const cardName = card.value === '10' ? card.value : card.value.charAt(0); // For numeric values
    const cardInfo = `${cardName} of ${card.suit}`;
    const cardElement = document.createElement('p');
    cardElement.textContent = cardInfo;
    handContainer.appendChild(cardElement);
  }
}

// Function to draw a new hand and display it
function drawNewHand() {
  const hand = getRandomHand();
  displayHand(hand);
}

// Initial draw of hand
drawNewHand();