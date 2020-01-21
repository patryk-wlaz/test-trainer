import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';
import { MatIconService } from 'app/core/mat-icon/mat-icon.service';

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './app-unauthenticated.component.html',
})
export class UnauthenticatedAppComponent {
  // MatIconService has to be here just for being triggered
  constructor (private store: Store<AppState>, private matIconService: MatIconService) {
  }
}
