export interface Answer {
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  answer?: Answer;
}

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
