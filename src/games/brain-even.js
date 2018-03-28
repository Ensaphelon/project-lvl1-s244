import { ask, getRandomNumber, print } from '../index';

const brainEven = (gameSettings) => {
  let correct = false;
  const number = getRandomNumber(gameSettings.min, gameSettings.max);
  print(`Question: ${number}`);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const currentAnswer = ask('Your answer: ');
  if ((currentAnswer === 'yes' && isEven) || (currentAnswer === 'no' && !isEven)) {
    correct = true;
  }
  return {
    correct,
    currentAnswer,
    correctAnswer,
  };
};

export default brainEven;
