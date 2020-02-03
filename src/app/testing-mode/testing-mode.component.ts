import { Component, OnInit, Input } from '@angular/core';
import { Question, Test } from '../config/model';

@Component({
  selector: 'app-testing-mode',
  templateUrl: './testing-mode.component.html',
  styleUrls: ['./testing-mode.component.scss']
})
export class TestingModeComponent implements OnInit {
  @Input() test: Test;
  testQuestions: Question[] = null;

  constructor() { }

  ngOnInit() {
  }

  start(): void {
    if (this.test.questions.length < this.test.amounts.all) {
      alert('Błąd w konfiguracji testu. Liczba pytań jest mniejsza niż ilość wymagana do utworzenia sprawdzianu.');
      throw new Error('There are not enough questions in the test - app cant generate check.');
    }

    this.testQuestions = this.test.questions;
    console.log("TCL: TestingModeComponent -> constructor -> this.testQuestions", this.testQuestions)
  }

}
