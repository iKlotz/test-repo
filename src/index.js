/**
 * @param {string} s stands for 'selector'
 * @param {any} p stands for 'parent' container. defaults to 'document'
 */
const $ = (s, p = document) => p.querySelector(s);
const cards = [];
//const card = $(".card");
// const cardFront = $(".card__face--front");

let icons = [
  "🤩",
  "🥦",
  "🐋",
  "🍬",
  "🐰",
  "🚀",
  "🍒",
  "🍕",
  "🍫",
  "🐶",
  "🎉",
  "🎈",
  "🍇",
  "🍔",
  "🌶",
  "🍤",
  "🍱",
  "🥧",
  "🍦",
  "🍭",
  "🍼",
  "🍺",
  "🎱",
  "⚽",
  "🏆"
];

let gameIcons = [];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const setListeners = () => {
  let card = "";
  let cardFront = "";
  for (let i = 1; i < 9; i++) {
    card = $(`.card${i} `);
    cards.push(card);
  }
};

const setIcons = () => {
  for (var i = 1; i < 9; i++) {
    let card1 = $(`.card${i} .card__face--front`);
    // let card2 = $(`.card${i} .card__face--front`);
    card1.innerText = gameIcons[i - 1];
  }
};

const initListeners = () => {
  for (const card of cards) {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  }
};

const setGameIconsArray = () => {
  for (let i = 0; i < 4; i++) {
    gameIcons.push(icons[i]);
  }
  gameIcons = gameIcons.concat(gameIcons);
};

//init cards
const initCards = () => {
  shuffleArray(icons);
  setGameIconsArray();
  shuffleArray(gameIcons);
  setListeners();
  setIcons();
  initListeners();
};

initCards();

const flipCards = () => {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => cards[i].click(), i * 500);
  }
};

setTimeout(() => flipCards(), 1000);

const validateChoice = () => {
  for (const card of cards) {
    card.addEventListener("click", (event) => {
      console.log(event.currentTarget.innerText);
    });
  }
};

validateChoice();
