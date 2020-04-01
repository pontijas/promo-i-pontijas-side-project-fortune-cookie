'use strict';

console.log('holiiii');

const cookieBtn = document.querySelector('.js-cookie-btn');
const cookieQuote = document.querySelector('.js-cookie-quote');

function breakCookie() {
  cookieQuote.innerHTML = `What is yours, shall come to you.`;
  console.log('me han clickado');
}

cookieBtn.addEventListener('click', breakCookie);
