import readlineSync from 'readline-sync';

// Utils

export const ask = question => readlineSync.question(question);

export const print = str => console.log(str);

export const getGreetings = name => `Hello, ${name}!`;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const getGcd = (a, b) => {
  if (b === 0) { return a; }
  return getGcd(b, a % b);
};

export const calcRandomOperation = [
  {
    sign: '+',
    calculate: (a, b) => a + b,
  },
  {
    sign: '-',
    calculate: (a, b) => a - b,
  },
  {
    sign: '*',
    calculate: (a, b) => a * b,
  },
];

// Game runner

export const gameOver = (userName, success, result, currentAnswer) => {
  if (success) {
    print(`Congratulations, ${userName}`);
  } else {
    print(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`);
    print(`Let's try again, ${userName}`);
  }
};

export const startGame = (logic, gameSettings) => {
  print('Welcome to Brain Games!');
  print(gameSettings.message);
  const userName = ask('May I have your name? ');
  let steps = 0;
  while (steps < gameSettings.steps) {
    const round = logic(gameSettings);
    print(`Question: ${round.question}`);
    const currentAnswer = ask('Your answer: ');
    if (currentAnswer === round.correctAnswer) {
      print('Correct!');
      steps += 1;
    } else {
      return gameOver(userName, false, round, currentAnswer);
    }
  }
  return gameOver(userName, true);
};
