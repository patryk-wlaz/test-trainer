import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../config/model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  tests: Test[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { tests }) => {
        this.tests = data.tests;
      });
  }
}
