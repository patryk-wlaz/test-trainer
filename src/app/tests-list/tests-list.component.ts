import { Component, OnInit } from '@angular/core';
import { config } from './../config';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent {
  tests = config;
}
