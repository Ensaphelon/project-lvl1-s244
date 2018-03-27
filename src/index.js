import readlineSync from 'readline-sync';

export const print = (str) => {
  console.log(str);
};

export const ask = question => readlineSync.question(question);

export const getGreetings = name => `Hello, ${name}!`;

export const getRandomNumber = (min, max) => Math.floor((min + Math.random()) * ((max + 1) - min));
