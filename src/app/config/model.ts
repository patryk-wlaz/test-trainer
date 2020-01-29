export interface Answer {
  answer: string;
  isCorrect: boolean;
  checked?: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export type Modes = 'showAll';

export interface Test {
  name: string;
  route: string;
  description: string;
  amounts: {
    all: number;
    required: number;
  };
  questions: Question[];
}
