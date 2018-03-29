import { calcRandomOperation, getRandomNumber, startGame } from '../';
import settings from '../settings';

const logic = (gameSettings) => {
  const firstOperand = getRandomNumber(gameSettings.min, gameSettings.max);
  const secondOperand = getRandomNumber(gameSettings.min, gameSettings.max);
  const operation = calcRandomOperation[getRandomNumber(0, 2)];
  const correctAnswer = operation.calculate(firstOperand, secondOperand).toString();
  const question = `${firstOperand} ${operation.sign} ${secondOperand}`;
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, settings.brainCalculator);
};
