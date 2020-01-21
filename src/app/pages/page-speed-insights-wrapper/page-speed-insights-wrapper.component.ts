import { Component, OnInit, OnDestroy } from '@angular/core';
import { registerPageSpeedInsightsApp } from 'src/single-spa/page-speed-insights';
import { ClientsFacade } from 'app/state/clients';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-page-speed-insights-wrapper',
  templateUrl: './page-speed-insights-wrapper.component.html',
})
export class PageSpeedInsightsWrapperComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  constructor(
    private clientsFacade: ClientsFacade
  ) { }

  ngOnInit() {
    const brand = this.clientsFacade.selectedBrand$;
    registerPageSpeedInsightsApp({ brand });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
