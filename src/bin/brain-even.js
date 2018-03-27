#!/usr/bin/env node

import { print, ask, getRandomNumber } from '..';

const steps = 3;
const min = 1;
const max = 50;

print('Welcome to Brain Games!');
print('Answer "yes" if number even otherwise answer "no".');

const name = ask('May I have your name? ');

const startRound = (counter = 0) => {
  if (counter === steps) {
    print(`Congratulations, ${name}!`);
    return;
  }
  const number = getRandomNumber(min, max);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  print(`Quesion: ${number}`);
  const currentAnswer = ask('Your answer: ');
  if ((currentAnswer === 'yes' && isEven) || (currentAnswer === 'no' && !isEven)) {
    print('Correct!');
    startRound(counter + 1);
  } else {
    print(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    print(`Let's try again, ${name}!`);
  }
};

startRound();
