import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../config/model';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.scss']
})
export class LearningModeComponent implements OnInit {
  @Input() questions: Question[];

  constructor() { }

  ngOnInit() {
  }

}
