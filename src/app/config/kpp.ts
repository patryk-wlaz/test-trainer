import { Test } from './model';

export const kpp: Test = {
  name: 'kpp',
  route: 'kpp',
  description: 'Test pierwszej pomocy',
  amounts: {
    all: 30,
    required: 27,
  },
  questions: [
    {
      question: 'Dlaczego Darek to Dariusz ale Marek to nie Mariusz?',
      answers: [
        {
          answer: 'Bo tak',
          isCorrect: false,
        },
        {
          answer: 'Nikt tego nie wie',
          isCorrect: true,
        },
      ],
    },
  ],
};
