import { Component, OnInit, Input } from '@angular/core';
import { Question, Test } from '../config/model';
import { isEmpty, sortBy, take, cloneDeep, map, some, filter } from 'lodash-es';

@Component({
  selector: 'app-testing-mode',
  templateUrl: './testing-mode.component.html',
  styleUrls: ['./testing-mode.component.scss']
})
export class TestingModeComponent implements OnInit {
  @Input() test: Test;
  testQuestions: Question[] = null;
  testResults: Question[] = null;
  currentQuestion: Question;
  timeLeft: number;
  correctAmount: number;
  swapQuestionTimeoutId;
  countdownTimeoutId;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.correctAmount = null;
    this.chooseQuestions();
    this.swapQuestion();
  }

  chooseQuestions(): void {
    if (this.test.questions.length < this.test.amounts.all) {
      alert('Błąd w konfiguracji testu. Liczba pytań jest mniejsza niż ilość wymagana do utworzenia sprawdzianu.');
      throw new Error('There are not enough questions in the test - app cant generate check.');
    }
    const sorted = sortBy(this.test.questions, () => Math.random());
    this.testQuestions = take(sorted, this.test.amounts.all);
    this.testResults = cloneDeep(this.testQuestions);
  }

  swapQuestion() {
    if (this.swapQuestionTimeoutId) { clearTimeout(this.swapQuestionTimeoutId); }
    if (isEmpty(this.testQuestions)) { return this.finishExam(); }

    this.currentQuestion = this.testQuestions.pop();
    this.swapQuestionTimeoutId = setTimeout(() => this.swapQuestion(), this.test.amounts.timeForQuestion);
    this.countDown(this.test.amounts.timeForQuestion);
  }

  countDown(time: number) {
    if (this.countdownTimeoutId) { clearTimeout(this.countdownTimeoutId); }
    this.timeLeft = time;
    if (this.timeLeft <= 0) { return; }
    this.countdownTimeoutId = setTimeout(() => this.countDown(this.timeLeft - 1000), 1000);
  }

  finishExam(): void {
    if (this.countdownTimeoutId) { clearTimeout(this.countdownTimeoutId); }
    this.testQuestions = null;
    this.currentQuestion = null;
    this.timeLeft = null;

    const correct = filter(this.testResults, result => some(result.answers, answer => answer.checked && answer.isCorrect));
    this.correctAmount = correct.length;
  }

  onAnswerClick(clicked: Question): void {
    this.testResults = map(this.testResults, question => question.question === clicked.question
      ? clicked
      : question
    );
  }

}
