import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Options, ChangeContext } from 'ng5-slider';
import * as _ from 'lodash';

import { Store, select } from '@ngrx/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import * as campaignActions from '@state/campaign/campaign.actions';
import { Campaign } from '@common';
import { AppState } from 'app/state';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-strategy-adsplit',
  templateUrl: './campaign-strategy-adsplit.component.html',
  styleUrls: ['./campaign-strategy-adsplit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CampaignStrategyAdsplitComponent implements OnInit, OnDestroy {
  @Input('campaignId') private campaignId: Campaign['id'];

  campaignSub: Subscription;

  public productDisplayValue: number;
  public productValue: number;
  public brandValue: number;
  public errorMessage = '';

  public minValue: Observable<number>;
  public maxValue: Observable<number>;
  public options: Options = {
    floor: 0,
    step: 5,
    tickStep: 5,
    ceil: 100,
    hidePointerLabels: true,
    hideLimitLabels: true,
    showOuterSelectionBars: true,
  };

  private lastValues = [];

  constructor (
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.campaignSub = this.store$.pipe(select((store: AppState) => store.campaign.campaign), filter(campaign => !!campaign))
      .subscribe((campaign) => {
        const { adsShare } = campaign;
        this.brandValue = adsShare[0];
        this.productValue = adsShare[1];
        this.productDisplayValue = adsShare[2];
      });

    this.minValue = this.store$.pipe(
      select((store: AppState) => store.campaign.campaign),
      filter(campaign => !!campaign),
      map(campaign => campaign.adsShare[0]));
    this.maxValue = this.store$.pipe(
      select((store: AppState) => store.campaign.campaign),
      filter(campaign => !!campaign),
      map(campaign => campaign.adsShare[0] + campaign.adsShare[1]));
  }

  public onUserChangeEnd(changeContext: ChangeContext): void {
    this.onEdit('brandValue', { target: { value: changeContext.value } });
    this.onEdit('productValue', { target: { value: changeContext.highValue - changeContext.value } });
    this.onEdit('productDisplayValue', { target: { value: 100 - changeContext.highValue } });
  }

  public ngOnDestroy(): void { }

  private areValuesTheSame(values: number[], oldValues: number[]): boolean {
    return (
      values[0] === oldValues[0]
      && values[1] === oldValues[1]
      && values[2] === oldValues[2]
    );
  }

  public onEdit(propName: string, event: any): void {
    let value = event.target.value;

    if (_.isString(value)) {
      value = Number(value.replace(/,/g, '.'));
    }

    this[propName] = _.round(value);

    const sum = this.brandValue + this.productDisplayValue + this.productValue;

    if (sum !== 100) {
      this.errorMessage = `The sum of the values must be equal to 100.
      Currently it is ${sum}.
      The new values won't be saved.`;

      return null;
    }

    const values = [
      this.brandValue,
      this.productValue,
      this.productDisplayValue,
    ];

    if (this.lastValues.length && this.areValuesTheSame(values, this.lastValues)) {
      return null;
    }

    this.lastValues = [...values];

    this.errorMessage = '';

    this.store$.dispatch(new campaignActions.UpdateCampaignAdSplit({
      campaignData: {
        adsShare: values,
      },
      campaignId: this.campaignId,
    }));
  }
}
