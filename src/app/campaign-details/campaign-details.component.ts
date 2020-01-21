import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Subscription, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { GetClientResDtoInterface, GetCurrencyResDtoInterface, GetMarketResDtoInterface } from '@common';
import { AppState } from 'app/state';
import * as CampaignDetailsActions from '@state/campaign/campaign.actions';
import { Go } from '@state/router';
import { getMarketsEntities } from '@state/markets';
import { dateDiffWeeks } from '../shared/utils/date-diff-weeks';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'DD.MM.YYYY',
    dateA11yLabel: 'DD.MM.YYYY',
    monthYearA11yLabel: 'DD.MM.YYYY',
  },
};

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CampaignDetailsComponent implements OnInit, OnDestroy {
  campaignsSub: Subscription;
  routeSub: Subscription;
  marketsSub: Subscription;
  formMarketSub: Subscription;
  formStartDateSub: Subscription;
  formEndDateSub: Subscription;

  campaignUUId = '0';
  maxDescriptionLength = 500;
  duration: string = null;

  form = this.formBuilder.group({
    clientId: ['', Validators.required],
    startDate: [(new Date()).toISOString(), Validators.required],
    endDate: [(new Date()).toISOString(), Validators.required],
    name: ['', Validators.required],
    marketId: ['', Validators.required],
    description: '',
    adsShare: this.formBuilder.control([70, 20, 10]),
    active: true,
  });

  clients$: Observable<GetClientResDtoInterface[]>;
  markets$: Observable<GetMarketResDtoInterface[]>;
  currencies$: Observable<GetCurrencyResDtoInterface[]>;
  currencyValue$: Observable<GetCurrencyResDtoInterface['acronym'] | GetCurrencyResDtoInterface['name']>;
  savingCampaign$: Observable<boolean>;

  private marketsEntities: { [key: string]: GetMarketResDtoInterface };

  constructor (
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.campaignsSub = this.store$.pipe(select((store: AppState) => store.campaign.campaign))
      .subscribe((campaign) => {
        this.form.reset(campaign || {});
        this.dateDiffWeeks();
        this.setCurrencyObservable({ currency: _.get(campaign, 'currency') });
      });

    this.clients$ = this.store$.select((state: AppState) => state.clients.list);
    this.markets$ = this.store$.pipe(
      select((state: AppState) => state.markets.list),
      map(markets => _.orderBy(markets, 'name'))
    );
    this.currencies$ = this.store$.select((state: AppState) => state.currencies.list);

    this.savingCampaign$ = this.store$.select((state: AppState) => state.campaign.isLoading);
    this.routeSub = this.route.parent.paramMap.subscribe((paramMap) => {
      return this.campaignUUId = paramMap.get('campaignId');
    });

    this.marketsSub = this.store$.select(getMarketsEntities)
      .subscribe((entities) => this.marketsEntities = entities);

    this.formMarketSub = this.form.get('marketId')
      .valueChanges
      .subscribe(marketId =>
        this.setCurrencyObservable({ marketId })
      );

    this.formStartDateSub = this.form.get('startDate').valueChanges.subscribe(() => { this.dateDiffWeeks(); });

    this.formEndDateSub = this.form.get('endDate').valueChanges.subscribe(() => { this.dateDiffWeeks(); });
  }

  cancel(): void {
    this.store$.dispatch(new Go({ path: ['campaigns'] }));
  }

  ngOnDestroy(): void { }

  saveCampaign(event: MouseEvent): void {
    event.preventDefault();

    const campaignData = {
      ...this.form.value,
      currencyId: _.get(this.marketsEntities, [this.form.value.marketId, 'defaultCurrencyId']),
    };

    if (this.campaignUUId === '0') {
      return this.store$.dispatch(new CampaignDetailsActions.SaveCampaign(campaignData));
    }

    return this.store$.dispatch(new CampaignDetailsActions.UpdateCampaign({
      campaignId: this.campaignUUId,
      campaignData,
      goTo: 'products',
    }));
  }

  dateDiffWeeks(): void {
    const start = this.form.get('startDate').value;
    const end = this.form.get('endDate').value;

    const diff = dateDiffWeeks(start, end);
    this.duration = `${diff}${diff && diff === 1 ? ' week' : ' weeks'}`;
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }

  setCurrencyObservable(data: { currency?: GetCurrencyResDtoInterface, marketId?: GetMarketResDtoInterface['id'] }): void {
    if (!data || !data.marketId && !data.currency) { return; }

    if (data.currency) {
      this.currencyValue$ = of(data.currency.acronym || data.currency.name);
      return;
    }

    const currencyId = _.get(this.marketsEntities, [data.marketId, 'defaultCurrencyId']);
    if (!currencyId) { return; }

    this.currencyValue$ = this.currencies$.pipe(
      map(currencies => {
        const currency = _.find(currencies, curr => curr.id === currencyId);
        return currency.acronym || currency.name;
      })
    );
  }
}
