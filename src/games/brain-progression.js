import { startGame, makeProgression, getRandomNumber, hideFormProgression } from '../';

const logic = () => {
  const diff = getRandomNumber(2, 5);
  const limit = 10;
  const starFrom = getRandomNumber(1, 5);
  const progression = makeProgression(diff, limit, starFrom);
  const hiddenNumberIndex = getRandomNumber(0, 9);
  const hiddenProgression = hideFormProgression(progression, hiddenNumberIndex);
  return {
    question: hiddenProgression.progression,
    correctAnswer: hiddenProgression.hiddenNumber,
  };
};

export default () => {
  startGame(logic, 3, 'What number is missing in this progression?');
};
