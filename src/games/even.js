import runGame from '../index.js';
import {getRandomNumber} from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

const runEvenGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData);
};

export default runEvenGame;