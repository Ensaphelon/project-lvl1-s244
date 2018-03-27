import readlineSync from 'readline-sync';

export const print = (str) => {
  console.log(str);
};

export const ask = question => readlineSync.question(question);

export const getGreetings = answer => `Hello, ${answer}!`;
