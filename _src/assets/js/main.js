'use strict';

const cookieBtn = document.querySelector('.js-cookie-btn');
const cookieQuote = document.querySelector('.js-cookie-quote');

// quotes i like
// All things are difficult before they are easy.
// Patience is your alley.
// Don’t pursue happiness – create it.
// We become what we do.
// What is yours, shall come to you.
// If you want the rainbow, you have to tolerate the rain.
// The usefulness of a cup is in its emptiness.
// Success lies in the hands of those who wants it.
// Big journeys begin with a single step.
// We learn little from success, but much from failure.
// Yet by calling full, you created emptiness.
// Silence is a source of great strength.
// Tension is who you think you should be. Relaxation is who you are.
// One who chases two rabbits catches neither.
// A single arrow is easily broken, but not ten in a bundle.
// One who smile rather than rages is always the stronger.
// The day you decide to do it, is your lucky day.

const arrQuotes = ['What is yours, shall come to you.', 'We become what we do.', 'Patience is your alley.', 'Don’t pursue happiness – create it.'];

function breakCookie() {
  cookieQuote.innerHTML = `<p class="css-cookie-quote">What is yours, shall come to you.</p>`;
  console.log('me han clickado');
}

cookieBtn.addEventListener('click', breakCookie);
