import { getRandomNumber, getGcd, startGame } from '../';
import settings from '../settings';

const logic = (gameSettings) => {
  const a = getRandomNumber(gameSettings.min, gameSettings.max);
  const b = getRandomNumber(gameSettings.min, gameSettings.max);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, settings.brainGcd);
};
