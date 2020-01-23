import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer } from '../config/model';
import { map } from 'lodash-es';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

  onPick(answer: Answer): void {
    this.question = {
      ...this.question,
      answers: map(this.question.answers, ans => ({
        ...ans,
        checked: ans.answer === answer.answer
          ? !answer.checked
          : false, // single choice
      })),
    };

    console.log('this.question.answers: ', this.question.answers);
  }

}
