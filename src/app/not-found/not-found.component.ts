import { Component, OnInit } from '@angular/core';

import { AppState } from 'app/state';
import { Back } from '@state/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  constructor (private store$: Store<AppState>) { }

  ngOnInit(): void { }

  goBack(): void {
    this.store$.dispatch(new Back());
  }
}
