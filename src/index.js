import readlineSync from 'readline-sync';

// Helpers

export const ask = question => readlineSync.question(question);

export const print = str => console.log(str);

export const getGreetings = name => `Hello, ${name}!`;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const calcRandomOperation = [
  {
    sign: '+',
    method: (a, b) => a + b,
  },
  {
    sign: '-',
    method: (a, b) => a - b,
  },
  {
    sign: '*',
    method: (a, b) => a * b,
  },
];

// Game runner

export const gameOver = (userName, success, result) => {
  if (success) {
    print(`Congratulations, ${userName}`);
  } else {
    print(`'${result.currentAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`);
    print(`Let's try again, ${userName}`);
  }
};

export const startGame = (logic, gameSettings, question) => {
  print('Welcome to Brain Games!');
  print(question);
  const userName = ask('May I have your name? ');
  let steps = 0;
  while (steps < gameSettings.steps) {
    const currentResult = logic(gameSettings);
    if (currentResult.correct) {
      print('Correct!');
      steps += 1;
    } else {
      return gameOver(userName, false, currentResult);
    }
  }
  return gameOver(userName, true);
};
