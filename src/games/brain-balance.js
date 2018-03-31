import { getBalanced, getRandomNumber, startGame } from '../';

const logic = () => {
  const number = getRandomNumber(500, 1500);
  return {
    question: number,
    correctAnswer: getBalanced(number),
  };
};

export default () => {
  startGame(logic, 3, 'Balance the given number.');
};
