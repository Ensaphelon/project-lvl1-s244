import { getRandomNumber, startGame } from '../';

const logic = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, 'Answer "yes" if number even otherwise answer "no".');
};
