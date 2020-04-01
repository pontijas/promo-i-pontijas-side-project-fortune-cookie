'use strict';

// Random Number
// genero un numero aleatorio ente 0 y 100

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
// declaramos el número random para ejecutar la función con parámetros:
const randomNumber = getRandomNumber(100);
// comprobamos que nos hace caso consoleando
// console.log(randomNumber);

// La pista
// leo el contenido del input cada vez que se hace click en el js-input-btn

const guessBtn = document.querySelector('.js-input-btn');
const inputNumber = document.querySelector('.js-input-number');

// esta es la función que llama a las demás, y que se ejecuta cuando se clicka el botón
function handleClue(ev) {
  // ponemos event prevent default para que no se envie el formulario y se pone en la primera linea de la función
  ev.preventDefault();
  // comprobamos que nos hace caso consoleando
  // console.log('me han clickado');
  // declaramos lo que tiene que leer, el valor del input
  showClue();
  showCounter();
}

// esta es la función que me muestra las pistas
function showClue() {
  const inputNumberValue = inputNumber.value;
  console.log(inputNumberValue, randomNumber);
  if (randomNumber === parseInt(inputNumberValue)) {
    console.log('¡Olé, lo has adivinado!');
  } else if (inputNumberValue > randomNumber) {
    console.log('Prueba con un número más pequeño...');
  } else if (inputNumberValue < randomNumber) {
    console.log('¡Ui! Prueba con un número más grande...');
  } else {
    console.log('Uhm, no sé...Prueba otra vez.');
  }
}

// esta es la función que va a mostrar las veces que hemos clickado el boton
function showCounter() {}

guessBtn.addEventListener('click', handleClue);
