import { startGame, makeProgression, getRandomNumber, hideFromProgression } from '../';

const logic = () => {
  const diff = getRandomNumber(2, 5);
  const limit = 10;
  const starFrom = getRandomNumber(1, 5);
  const progression = makeProgression(diff, limit, starFrom);
  const hiddenNumberIndex = getRandomNumber(0, 9);
  const hiddenProgression = hideFromProgression(progression, hiddenNumberIndex);
  return {
    question: hiddenProgression.progression,
    correctAnswer: hiddenProgression.hiddenNumber,
  };
};

export default () => {
  startGame(logic, 'What number is missing in this progression?');
};
