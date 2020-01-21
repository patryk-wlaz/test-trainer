import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { GetCampaignResDtoInterface } from '@common';
import { AppState } from 'app/state';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-summary-campaign-info',
  templateUrl: './campaign-summary-campaign-info.component.html',
  styleUrls: ['./campaign-summary-campaign-info.component.scss'],
})
export class CampaignSummaryCampaignInfoComponent implements OnInit, OnDestroy {
  public campaign$: Observable<GetCampaignResDtoInterface>;

  public constructor (private store$: Store<AppState>) { }

  public ngOnInit(): void {
    this.campaign$ = this.store$.pipe(select((store: AppState) => store.campaign.campaign));
  }

  public ngOnDestroy(): void { }
}
