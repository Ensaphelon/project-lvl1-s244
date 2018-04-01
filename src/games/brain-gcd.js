import { getRandomNumber, getGcd, startGame } from '../';

const logic = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, 'Find the greatest common divisor of given numbers.');
};
