import { Component } from '@angular/core';
import { config } from './../config';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  tests = config;
}
