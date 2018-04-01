import { calcRandomOperation, getRandomNumber, startGame } from '../';

const logic = () => {
  const firstOperand = getRandomNumber(1, 20);
  const secondOperand = getRandomNumber(1, 20);
  const operation = calcRandomOperation[getRandomNumber(0, 2)];
  const correctAnswer = operation.calculate(firstOperand, secondOperand).toString();
  const question = `${firstOperand} ${operation.sign} ${secondOperand}`;
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(logic, 'What is the result of the expression?');
};
