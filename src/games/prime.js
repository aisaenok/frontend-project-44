import runGame from '../index.js';
import {getRandomNumber} from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

const runPrimeGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData);
};

export default runPrimeGame;