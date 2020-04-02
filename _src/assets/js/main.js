'use strict';

const cookieBtn = document.querySelector('.js-cookie-btn');
const cookieQuote = document.querySelector('.js-cookie-quote');

// chinese quotes I like
// What is yours, shall come to you.
// Patience is your alley.
// All things are difficult before they are easy.
// Don’t pursue happiness – create it.
// The usefulness of a cup is in its emptiness.
// Success lies in the hands of those who want it.
// A journey of thousand miles must begin with a single step.
// We learn little from success, but much from failure.
// Yet by calling full, you created emptiness.
// Silence is a source of great strength.
// Tension is who you think you should be. Relaxation is who you are.
// One who chases two rabbits catches neither.
// A single arrow is easily broken, but not ten in a bundle.
// One who smile rather than rages is always the stronger.
// The day you decide to do it, is your lucky day.
// Act don't react.
// Every smile is a direct achievement.
// To see things in the seed, that is genius.
// One who obtains has little. One who scatters has much.
// Manifest plainness, embrace simplicity, reduce selfishness, have few desires.
// All things in the world come from being. And being comes from non-being.
// Real Knowledge is to know the extent of one's ignorance.
// What is firmly rooted cannot be pulled out.
// Stay at the center of the circle and let things take their course.

const quotes = [
  `What is yours, shall come to you.`,
  `Patience is your alley.`,
  `All things are difficult before they are easy.`,
  `Don’t pursue happiness – create it.`,
  `The usefulness of a cup is in its emptiness.`,
  `Success lies in the hands of those who want it.`,
  `A journey of thousand miles must begin with a single step.`,
  `We learn little from success, but much from failure.`,
  `Yet by calling full, you created emptiness.`,
  `Silence is a source of great strength.`,
  `Tension is who you think you should be. Relaxation is who you are.`,
  `One who chases two rabbits catches neither.`,
  `A single arrow is easily broken, but not ten in a bundle.`,
  `One who smile rather than rages is always the stronger.`,
  `The day you decide to do it, is your lucky day.`,
  `Act, don't react.`,
  `Every smile is a direct achievement.`,
  `To see things in the seed, that is genius.`,
  `One who obtains has little. One who scatters has much.`,
  `Manifest plainness, embrace simplicity, reduce selfishness, have few desires.`,
  `All things in the world come from being. And being comes from non-being`,
  `Real Knowledge is to know the extent of one's ignorance.`,
  `A good traveler has no fixed plans and is not intent on arriving.`,
  `Stay at the center of the circle and let things take their course.`,
  `What is firmly rooted cannot be pulled out.`
];

console.log(quotes);

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function updateAll() {
  paintQuote();
  colorTextQuote();
}

function paintQuote() {
  for (let i = 0; i < quotes.length; i++) {
    cookieQuote.innerHTML = `<p class="css-cookie-quote">${quotes[i]}</p>`;
  }
}

function colorTextQuote() {
  const randomNumber = getRandomNumber();
  if (randomNumber % 2 === 0) {
    cookieQuote.classList.add('update-color-quote');
    console.log('is even red');
  } else {
    cookieQuote.classList.remove('update-color-quote');
    console.log('is uneven blue');
  }
  console.log(randomNumber);
}

cookieBtn.addEventListener('click', updateAll);
