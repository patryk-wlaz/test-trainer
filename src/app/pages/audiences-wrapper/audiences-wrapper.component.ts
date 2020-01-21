import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { registerAudiencesApp } from 'src/single-spa/audiences';

import { UsersFacade } from 'app/state/users';

@Component({
  selector: 'app-audiences-wrapper',
  templateUrl: './audiences-wrapper.component.html',
})
export class AudiencesWrapperComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();

  constructor(private usersFacade: UsersFacade) {}

  public ngOnInit(): void {
    this.usersFacade.myself$
      .pipe(
        filter((myself) => !!myself),
        takeUntil(this.unsubscribe)
      )
      .subscribe((user) => registerAudiencesApp({ user }));
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
