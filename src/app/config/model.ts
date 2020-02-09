export interface Answer {
  answer: string;
  isCorrect: boolean;
  checked?: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export type Modes = 'showAll' | 'test' | 'results';

export interface Test {
  name: string;
  route: string;
  updatedAt: number;
  description: string;
  amounts: {
    all: number;
    required: number;
    timeForQuestion?: number; // ms
  };
  questions: Question[];
}
