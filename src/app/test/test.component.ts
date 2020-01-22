import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../config/model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test: Test;
  mode: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
    .subscribe((data: { test: Test }) => {
      this.test = data.test;
    });
  }

  modeChange(mode: string): void {
    this.mode = mode;
  }

}
