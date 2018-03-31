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

export const swapCharacters = (sourceString, index, char) => {
  let str = sourceString;
  str = str.split('');
  str[index] = char;
  return str.join('');
};

export const getExtremum = (number, max, min, position, maxIndex, minIndex) => {
  if (number.length < 1) {
    return {
      max: {
        value: max,
        index: maxIndex,
      },
      min: {
        value: min,
        index: minIndex,
      },
    };
  }
  const current = Number(number[0]);
  const rest = number.substr(1);
  if (current > max) {
    return getExtremum(rest, current, min, position + 1, position, minIndex);
  } else if (current < min) {
    return getExtremum(rest, max, current, position + 1, maxIndex, position);
  }
  return getExtremum(rest, max, min, position + 1, maxIndex, minIndex);
};

export const sort = (str) => {
  const numbers = Array.from(str.toString());
  return numbers.sort((a, b) => a - b).join('');
};

export const balanceNumber = (number, extremum, diff) => {
  const newMin = extremum.min.value + Math.floor(diff / 2);
  const newMax = extremum.max.value - Math.floor(diff / 2);
  let str = number.toString();
  str = swapCharacters(str, extremum.min.index, newMax);
  str = swapCharacters(str, extremum.max.index, newMin);
  return Number(str);
};

export const getBalanced = (number) => {
  const str = number.toString();
  if (str.length < 2) {
    return true;
  }
  const extremum = getExtremum(str, 0, Number(str[0]), 0, 0, 0);
  const diff = extremum.max.value - extremum.min.value;
  if (diff > 1) {
    return getBalanced(balanceNumber(str, extremum, diff));
  }
  return sort(number);
};

// Game runner

export const gameOver = (userName, success, result, currentAnswer) => {
  if (success) {
    print(`Congratulations, ${userName}`);
  } else {
    print(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`);
    print(`Let's try again, ${userName}`);
  }
};

export const startGame = (logic, rounds, message) => {
  print('Welcome to Brain Games!');
  print(message);
  const userName = ask('May I have your name? ');
  let steps = 0;
  while (steps < rounds) {
    const round = logic();
    print(`Question: ${round.question}`);
    const currentAnswer = ask('Your answer: ');
    if (currentAnswer === round.correctAnswer.toString()) {
      print('Correct!');
      steps += 1;
    } else {
      return gameOver(userName, false, round, currentAnswer);
    }
  }
  return gameOver(userName, true);
};
