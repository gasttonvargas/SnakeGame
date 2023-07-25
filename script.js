//Elementos HTML
const board = document.getElementById('board')
const scoreBoard = document.getElementById('scoreBoard')
const startButton = document.getElementById('iniciar')
const gameOversign = document.getElementById('gameOver')

//Configuración del juego
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2
};
const directions = {
  arrowUp: -10,
  arrowDown: 10,
  arrowRight: 1,
  arrowLeft: -1,
};

//Variables del juego
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const setGame = () => {
  snake = ['00','01','02','03'];
  score = snake.length
  direction = 'ArrowRight';
}

const startGame = () => {
  setGame ();
}

startButton.addEventListener('click', startGame);
