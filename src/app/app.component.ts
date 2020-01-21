import { Component, OnInit } from '@angular/core';

import { MatIconService } from './core/mat-icon.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { startTracking, sendPageVisit, loadMatomoScript } from './core/matomo';
import { filter, pairwise, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-trainer';

  constructor(
    private matIconService: MatIconService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    const matomoId = environment.matomoId;
    if (!matomoId) { return; }

    loadMatomoScript();
    startTracking(matomoId);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      pairwise()
    ).subscribe(([oldEvent, newEvent]: [NavigationEnd, NavigationEnd]) =>
      sendPageVisit(oldEvent.url, newEvent.url)
    );
  }
}
