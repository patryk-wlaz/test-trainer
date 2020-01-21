import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/state';
import * as _ from 'lodash';

import { Campaign, CampaignStatuses, StepsEnum } from '@common';
import { debounceTime } from 'rxjs/operators';
import { GetCampaigns, SetGetCampaignsParams, HandleInfinityScroll, RemoveCampaign } from '@state/campaigns/campaigns.actions';
import { Go } from '@state/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Sort, MatDialog } from '@angular/material';
import { dateDiffWeeks } from 'app/shared/utils/date-diff-weeks';
import { CampaignsState } from '../state/campaigns/campaigns.model';
import { DuplicateCampaign } from '../state/campaign';
import { ConfirmationDialogComponent, ConfirmationDialogData } from '../confirmation-dialog/confirmation-dialog';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignsListComponent implements OnInit, OnDestroy {
  searchSub: Subscription;
  sortSub: Subscription;

  flags = {
    'Australia': './assets/flags/flags-market-australia.png',
    'Canada': './assets/flags/flags-market-canada.png',
    'EU': './assets/flags/flags-market-eu.png',
    'France': './assets/flags/flags-market-france.png',
    'Germany': './assets/flags/flags-market-germany.png',
    'India': './assets/flags/flags-market-india.png',
    'Italy': './assets/flags/flags-market-italy.png',
    'Netherlands': './assets/flags/flags-market-netherlands.png',
    'Russia': './assets/flags/flags-market-russia.png',
    'Spain': './assets/flags/flags-market-spain.png',
    'United Kingdom': './assets/flags/flags-market-uk.png',
    'USA': './assets/flags/flags-market-usa.png',
  };

  displayedColumns = [
    'name',
    'client',
    'market',
    'status',
    'startDate',
    'duration',
    'endDate',
    'budget',
    'marketApi',
    'menu',
  ];

  filters = [
    {
      name: 'All Campaigns',
      value: '',
    },
    {
      name: 'Active',
      value: CampaignStatuses.active,
    },
    {
      name: 'Planned',
      value: CampaignStatuses.planned,
    },
    {
      name: 'Draft',
      value: CampaignStatuses.draft,
    },
    {
      name: 'Finished',
      value: CampaignStatuses.finished,
    },
  ];

  activeFilter = 'All Campaigns';

  search$: Subject<string> = new Subject();
  campaigns$: Observable<CampaignsState['list']>;
  loadingCampaigns$: Observable<boolean>;
  campaignsError$: Observable<string>;
  sortBy = 'startDate';
  sortDir = 'asc';

  constructor(private store$: Store<AppState>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new SetGetCampaignsParams({ search: null, status: null, offset: 0, limit: 10, sort: null }));
    this.campaigns$ = this.store$.pipe(
      select((store: AppState) => store.campaigns.list
        .map(campaign => ({
          ...campaign,
          budget: _.round(campaign.budget),
        }))));
    this.loadingCampaigns$ = this.store$.pipe(select((store: AppState) => store.campaigns.isLoading));
    this.campaignsError$ = this.store$.pipe(select((store: AppState) => store.campaigns.errorMessage));
    this.sortSub = this.store$.pipe(select(store => _.get(store, 'campaigns.getCampaignsParams.sort')))
      .subscribe(sort => {
        if (!_.isString(sort)) {
          return;
        }

        this.sortDir = sort[0] === '-' ? 'desc' : 'asc';
        this.sortBy = sort.replace('-', '');
      });

    this.searchSub = this.search$.pipe(
      debounceTime(500)
    ).subscribe((text: string): void => {
      this.searchCampaigns(text);
    });
  }

  ngOnDestroy(): void {
    // make sure that nothing will remain in store when user exit the view
  }

  searchCampaigns(search: string): void {
    this.store$.dispatch(new SetGetCampaignsParams({ search }));
  }

  onSearchInputKeyUp(searchInputValue: string): void {
    this.search$.next(searchInputValue);
  }

  clearSearch(): void {
    this.store$.dispatch(new SetGetCampaignsParams({ search: null }));
  }

  goToNewCampaignScreen(): void {
    this.store$.dispatch(new Go({ path: [`/campaigns/0`] }));
  }

  openCampaign(id: string): void {
    this.store$.dispatch(new Go({ path: [`/campaigns/${id}`]}));
  }

  duplicateCampaign(id: string): void {
    this.store$.dispatch(new DuplicateCampaign(id));
  }

  removeCampaign(id: string): void {
    const data: ConfirmationDialogData = {
      title: 'Delete campaign',
      text: 'That will delete campaign from list.\nAre you sure?',
      confirmText: 'delete',
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data,
    });

    dialogRef.afterClosed().subscribe(shouldRemove =>
      shouldRemove && this.store$.dispatch(new RemoveCampaign(id))
    );
  }

  changeFilter(filter: { name: string, value: string }): void {
    this.activeFilter = filter.name;
    this.store$.dispatch(new SetGetCampaignsParams({ status: filter.value }));
  }

  dateDiffWeeks(startDate: string, endDate: string): number {
    return dateDiffWeeks(startDate, endDate);
  }

  getCampaignStatus(element: Campaign): string {
    if (element.step < StepsEnum.SUMMARY) {
      return CampaignStatuses.draft;
    }
    if (new Date(element.startDate) > new Date()) {
      return CampaignStatuses.planned;
    }
    if (new Date(element.endDate) < new Date()) {
      return CampaignStatuses.finished;
    }

    return CampaignStatuses.active;
  }

  sortData($event: Sort): void {
    const { active, direction } = $event;

    const sortBy = direction
      ? `${direction === 'asc' ? '' : '-'}${active}`
      : null;

    this.store$.dispatch(new SetGetCampaignsParams({ sort: sortBy }));
  }

  onScroll(): void {
    this.store$.dispatch(new HandleInfinityScroll());
  }

  stopPropagation($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
  }
}
