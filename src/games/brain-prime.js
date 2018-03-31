import { startGame, getRandomNumber, isPrimeNumber } from '../';

const logic = () => {
  const number = getRandomNumber(1, 15);
  return {
    question: number,
    correctAnswer: isPrimeNumber(number) ? 'yes' : 'no',
  };
};

export default () => {
  startGame(logic, 3, 'Is this number prime?');
};
