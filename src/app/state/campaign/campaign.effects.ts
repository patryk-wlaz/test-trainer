import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap, map, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as CampaignActions from './campaign.actions';
import { AppState } from 'app/state';
import { HttpService } from 'app/core/http/http.service';
import { GetCampaignResDtoInterface, Campaign, DuplicateCampaignResDtoInterface } from '@common';
import { Go } from '@state/router';

@Injectable()
export class CampaignEffects {
  constructor (
    private actions$: Actions<CampaignActions.All>,
    private router: Router,
    private store$: Store<AppState>,
    private http: HttpService
  ) { }

  @Effect() GetCampaign: Observable<Action> = this.actions$.pipe(
    ofType(CampaignActions.GET_CAMPAIGN),
    map((action: CampaignActions.GetCampaign) => action.payload),
    switchMap((campaignId) =>
      this.http.getCampaign(campaignId).pipe(
        map(
          (campaign: GetCampaignResDtoInterface) =>
            new CampaignActions.GetCampaignSuccess(campaign)
        ),
        catchError(err => of(new CampaignActions.GetCampaignFail(err)))
      )
    )
  );

  @Effect() SaveCampaign: Observable<Action> = this.actions$.pipe(
    ofType(CampaignActions.SAVE_CAMPAIGN),
    map((action: CampaignActions.SaveCampaign) => action.payload),
    switchMap((currentCampaign) =>
      this.http.saveCampaign(currentCampaign).pipe(
        mergeMap((campaign: GetCampaignResDtoInterface) => [
          new CampaignActions.SaveCampaignSuccess(campaign),
          new Go({ path: [`campaigns/${campaign.id}/products`] }),
        ]),
        catchError(err => of(new CampaignActions.SaveCampaignFail(err)))
      )
    )
  );

  @Effect() UpdateCampaign: Observable<Action> = this.actions$.pipe(
    ofType(CampaignActions.UPDATE_CAMPAIGN, CampaignActions.UPDATE_CAMPAIGN_AD_SPLIT),
    map((action: CampaignActions.UpdateCampaign) => action.payload),
    switchMap(({ campaignId, campaignData, goTo }) =>
      this.http.updateCampaign(campaignId, campaignData).pipe(
        mergeMap((campaign: GetCampaignResDtoInterface) => [
          new CampaignActions.UpdateCampaignSuccess(campaign),
          goTo ? new Go({ path: [`campaigns/${campaign.id}/${goTo}`] }) : { type: 'null' },
        ]),
        catchError(err => of(new CampaignActions.UpdateCampaignFail(err)))
      )
    )
  );

  @Effect() DuplicateCampaign: Observable<Action> = this.actions$.pipe(
    ofType(CampaignActions.DUPLICATE_CAMPAIGN),
    map((action: CampaignActions.DuplicateCampaign) => action.payload),
    switchMap((id) =>
      this.http.duplicateCampaign(id).pipe(
        map((data: DuplicateCampaignResDtoInterface) =>
          new CampaignActions.DuplicateCampaignSuccess(data)
        ),
        catchError(err => of(new CampaignActions.DuplicateCampaignFail(err)))
      )
    )
  );

  @Effect() DuplicateCampaignSuccess: Observable<Action> = this.actions$.pipe(
    ofType(CampaignActions.DUPLICATE_CAMPAIGN_SUCCESS),
    map((action: CampaignActions.DuplicateCampaignSuccess) => action.payload),
    map((data) => new Go({ path: [`campaigns/${data.id}/details`] }))
  );
}
