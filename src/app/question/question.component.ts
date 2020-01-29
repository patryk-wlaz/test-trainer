import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer, Modes } from '../config/model';
import { map } from 'lodash-es';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() mode: Modes;

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
  }

  shouldUseRevealedAnswerClass(answer: Answer, correctClass: boolean): boolean {
    if (!answer.checked && this.mode !== 'showAll') { return false; }
    if (this.mode === 'showAll') {
      return correctClass && answer.isCorrect;
    }
    return answer.isCorrect === correctClass;
  }

}
