import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;
const MIN_RANDOM = 1;
const MAX_RANDOM = 100;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const question = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;