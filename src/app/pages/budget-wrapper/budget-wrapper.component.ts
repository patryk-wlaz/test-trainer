import { Component, OnInit } from '@angular/core';
import { registerBudgetApp } from 'src/single-spa/budget';

@Component({
  selector: 'app-budget-wrapper',
  templateUrl: './budget-wrapper.component.html',
  styleUrls: ['./budget-wrapper.component.scss'],
})
export class BudgetWrapperComponent implements OnInit {

  ngOnInit() {
    registerBudgetApp();
  }

}
