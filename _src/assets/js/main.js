'use strict';

const cookieBtn = document.querySelector('.js-cookie-btn');
const cookieQuote = document.querySelector('.js-cookie-quote');

// quotes array

const quotes = [`What is yours, shall come to you.`, `Patience is your ally.`, `All things are difficult before they are easy.`, `Don’t pursue happiness – create it.`, `The usefulness of a cup is in its emptiness.`, `Success lies in the hands of those who want it.`, `A journey of thousand miles must begin with a single step.`, `We learn little from success, but much from failure.`, `Yet by calling full, you created emptiness.`, `Silence is a source of great strength.`, `Tension is who you think you should be. Relaxation is who you are.`, `One who chases two rabbits catches neither.`, `A single arrow is easily broken, but not ten in a bundle.`, `One who smile rather than rages is always the stronger.`, `The day you decide to do it, is your lucky day.`, `Act, don't react.`, `Every smile is a direct achievement.`, `To see things in the seed, that is genius.`, `All things in the world come from being. And being comes from non-being`, `knowledge is to know the extent of one's ignorance.`, `A good traveler has no fixed plans and is not intent on arriving.`, `Stay at the center of the circle and let things take their course.`, `What is firmly rooted cannot be pulled out.`];

// functions

function getRandomNumber() {
  return Math.floor(Math.random() * quotes.length);
}

function updateAll() {
  const randomNumber = getRandomNumber();
  paintQuote(randomNumber);
  colorTextQuote(randomNumber);
  console.log('random number hosdokash', randomNumber);
}

function paintQuote(randomNumber) {
  let quote = quotes[randomNumber];
  cookieQuote.innerHTML = `<p class="css-cookie-quote">${quote}</p>`;
}

function colorTextQuote(randomNumber) {
  if (randomNumber % 2 === 0) {
    cookieQuote.classList.add('update-color-quote');
    console.log('is even red');
  } else {
    cookieQuote.classList.remove('update-color-quote');
    console.log('is uneven blue');
  }
  console.log('bingo', randomNumber);
}

cookieBtn.addEventListener('click', updateAll);
