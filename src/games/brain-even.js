import { getRandomNumber, startGame } from '../';
import settings from '../settings';

const logic = (gameSettings) => {
  const question = getRandomNumber(gameSettings.min, gameSettings.max);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, settings.brainEven);
};
