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


export const getBalancedNumber = (number) => {
  const balanceNumber = (extremum, diff) => {
    const newMin = extremum.min.value + Math.floor(diff / 2);
    const newMax = extremum.max.value - Math.floor(diff / 2);
    let str = number.toString();
    str = swapCharacters(str, extremum.min.index, newMax);
    str = swapCharacters(str, extremum.max.index, newMin);
    return Number(str);
  };
  const str = number.toString();
  if (str.length < 2) {
    return true;
  }
  const extremum = getExtremum(str, 0, Number(str[0]), 0, 0, 0);
  const diff = extremum.max.value - extremum.min.value;
  if (diff > 1) {
    return getBalancedNumber(balanceNumber(extremum, diff));
  }
  return sort(number);
};

export const makeProgression = (diff, limit, startFrom, result = [], step = 1) => {
  if (step > limit) {
    return result;
  }
  result.push(startFrom + (diff * step));
  return makeProgression(diff, limit, startFrom, result, step + 1);
};

export const hideFromProgression = (progression, index) => {
  const resultProgression = progression;
  const hiddenNumber = resultProgression[index];
  resultProgression[index] = '..';
  return {
    progression: progression.join(' '),
    hiddenNumber,
  };
};

export const isPrimeNumber = (number, result = 0, step = 1) => {
  if (result > 2) {
    return false;
  }
  if (result < 2 && step >= number) {
    return true;
  }
  return isPrimeNumber(number, number % step === 0 ? result + 1 : result, step + 1);
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

export const startGame = (logic, message) => {
  print('Welcome to Brain Games!');
  print(message);
  const userName = ask('May I have your name? ');
  let steps = 0;
  while (steps < 3) {
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
