import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer, Modes } from '../config/model';
import { map } from 'lodash-es';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question;
  @Input() mode: Modes;
  @Output() answerClick = new EventEmitter<Question>();

  onPick(answer: Answer): void {
    if (this.mode === 'results') { return; }
    this.question = {
      ...this.question,
      answers: map(this.question.answers, ans => ({
        ...ans,
        checked: ans.answer === answer.answer
          ? !answer.checked
          : false, // single choice
      })),
    };
    this.answerClick.emit(this.question);
  }

  shouldUseRevealedAnswerClass(answer: Answer, correctClass: boolean): boolean {
    if (this.mode === 'test') { return false; }
    // if (this.mode !== 'showAll') { return false; }

    if (this.mode === 'showAll') { return correctClass && answer.isCorrect; }
    if (this.mode === 'results') {
      return correctClass && answer.isCorrect
        || !correctClass && answer.checked && !answer.isCorrect;
    }

    return answer.checked && (answer.isCorrect === correctClass);
  }

}
