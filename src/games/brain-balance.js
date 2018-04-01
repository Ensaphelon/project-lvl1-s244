import { getBalancedNumber, getRandomNumber, startGame } from '../';

const logic = () => {
  const number = getRandomNumber(500, 1500);
  return {
    question: number,
    correctAnswer: getBalancedNumber(number),
  };
};

export default () => {
  startGame(logic, 'Balance the given number.');
};
