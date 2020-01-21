import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'app/state';
import { MatIconService } from 'app/core/mat-icon/mat-icon.service';
import { track } from '../matomo';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-authenticated',
  templateUrl: './app-authenticated.component.html',
  styleUrls: ['./app-authenticated.scss'],
})
export class AuthenticatedAppComponent implements OnInit {
  // MatIconService has to be here just for being triggered
  constructor(private store$: Store<AppState>, private matIconService: MatIconService) {}

  ngOnInit(): void {
    this.store$.pipe(
      select((state: AppState) => _.get(state, ['auth', 'user', 'id'])),
      filter(id => !!id)
    ).subscribe(userId => {
      track(['setUserId', userId], ['trackPageView']);
    });
  }
}
