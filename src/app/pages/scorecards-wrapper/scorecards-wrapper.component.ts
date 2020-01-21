import { Component, OnInit } from '@angular/core';
import { registerScorecardsApp } from 'src/single-spa/scorecards';

@Component({
  selector: 'app-scorecards-wrapper',
  templateUrl: './scorecards-wrapper.component.html',
})
export class ScorecardsWrapperComponent implements OnInit {

  ngOnInit() {
    registerScorecardsApp();
  }
}
