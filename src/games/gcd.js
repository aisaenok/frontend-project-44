import runGame from '../index.js';
import {getRandomNumber} from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const getRoundData = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData);
};

export default runGcdGame;