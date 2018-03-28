import { ask, calcRandomOperation, getRandomNumber, print } from '../index';

const brainCalculator = (gameSettings) => {
  let correct = false;
  const operatorNumber = getRandomNumber(0, 2);
  const firstOperand = getRandomNumber(gameSettings.min, gameSettings.max);
  const secondOperand = getRandomNumber(gameSettings.min, gameSettings.max);
  const operator = calcRandomOperation[operatorNumber].sign;
  const correctAnswer = calcRandomOperation[operatorNumber].method(firstOperand, secondOperand);
  print(`Question: ${firstOperand} ${operator} ${secondOperand}`);
  const currentAnswer = ask('Your answer: ');
  if (currentAnswer === correctAnswer.toString()) {
    correct = true;
  }
  return {
    correct,
    currentAnswer,
    correctAnswer,
  };
};

export default brainCalculator;
