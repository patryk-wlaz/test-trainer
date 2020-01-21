import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { AppState } from '../state';
import { CampaignState, isMarketSupported } from '@state/campaign';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import {
  StepsEnum,
  GetCampaignResDtoInterface,
  GetProductsResDtoInterface,
} from '@common';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { tap, filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-wrapper',
  templateUrl: './campaign-wrapper.component.html',
  styleUrls: ['./campaign-wrapper.component.scss'],
})
export class CampaignWrapperComponent implements OnInit, OnDestroy {
  campaign$: Observable<CampaignState['campaign']>;
  currentStep: number;
  sub: Subscription;
  currency: GetCampaignResDtoInterface['currency'];
  products: GetProductsResDtoInterface['rows'];
  navLinks = [
    {
      label: 'Details',
      url: './details',
      step: StepsEnum.DETAILS,
      aria: 'Campaign\'s details page',
    },
    {
      label: 'Products',
      url: './products',
      step: StepsEnum.PRODUCTS,
      aria: 'Campaign\'s products page',
    },
    {
      label: 'Keywords',
      url: './keywords',
      step: StepsEnum.KEYWORDS,
      aria: 'Campaign\'s keywords page',
    },
    {
      label: 'Strategy',
      url: './strategy',
      step: StepsEnum.STRATEGY,
      aria: 'Campaign\'s strategy page',
    },
    {
      label: 'Summary',
      url: './summary',
      step: StepsEnum.SUMMARY,
      aria: 'Campaign\'s summary page',
    },
  ];
  isApiAvailable: Observable<boolean>;

  constructor (
    private store$: Store<AppState>,
    private dialog: MatDialog,
    private router: Router,
    private location: Location) {
  }

  ngOnInit(): void {
    this.campaign$ = this.store$.pipe(
      select(store => store.campaign.campaign));

    this.isApiAvailable = this.store$.pipe(
      select(isMarketSupported)
    );

    // set currentStep, but not on the first entry
    this.sub = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      tap((event: RouterEvent) => {
        // prevents checking for url change if user decides to reroute to campaigns list, causes bug
        if (_.split(event.url, '/').length < 4) {
          return;
        }
        this.currentStep = this.getCurrentStep(event.url);
      })
    ).subscribe();

    // only needed for first entry on page
    this.currentStep = this.getCurrentStep(this.location.path());
  }

  ngOnDestroy(): void { }

  getCurrentStep(url: string): number {
    return _.find(this.navLinks, navLink =>
      _.includes(url, navLink.url.substring(1))
    ).step;
  }

  isStepDisabled(linkStep: number, campaign: CampaignState['campaign']): boolean {
    return !campaign || (linkStep > campaign.step);
  }
}
