import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, NavigationStart } from '@angular/router';

import { AppState } from './state';
import { MatIconService } from './core/mat-icon/mat-icon.service';
import { filter, pairwise } from 'rxjs/operators';
import { track } from 'src/app/matomo';
import { GetVersion } from '@state/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // MatIconService has to be here just for being triggered
  constructor(private store: Store<AppState>, private matIconService: MatIconService, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetVersion());
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        pairwise(),
      )
      .subscribe(([oldEvent, newEvent]: [NavigationStart, NavigationStart]) => {
        track(
          ['setReferrerUrl', oldEvent.url],
          ['setCustomUrl', newEvent.url],
          ['deleteCustomVariables', 'page'],
          ['setGenerationTimeMs', 0],
          ['trackPageView'],
          ['enableLinkTracking'],
        );
      });
  }
}
