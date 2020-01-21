import { Component, OnInit, OnDestroy } from '@angular/core';
import { registerBriefsApp } from 'src/single-spa/briefs';
import { Subject } from 'rxjs';
import { UsersFacade } from 'app/state/users';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-briefs-wrapper',
  styleUrls: ['./briefs-wrapper.component.scss'],
  templateUrl: './briefs-wrapper.component.html',
})
export class BriefsWrapperComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.usersFacade.myself$
      .pipe(
        filter((myself) => !!myself),
        takeUntil(this.unsubscribe)
      )
      .subscribe(user => registerBriefsApp({ user }));
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
