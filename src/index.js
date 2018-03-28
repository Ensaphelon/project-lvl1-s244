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

// Games logic

export const brainEven = (gameSettings) => {
  let correct = false;
  const number = getRandomNumber(gameSettings.min, gameSettings.max);
  print(`Question: ${number}`);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const currentAnswer = ask('Your answer: ');
  if ((currentAnswer === 'yes' && isEven) || (currentAnswer === 'no' && !isEven)) {
    correct = true;
  }
  return {
    correct,
    currentAnswer,
    correctAnswer,
  };
};

export const brainCalculator = (gameSettings) => {
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

// Game runner logic

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
