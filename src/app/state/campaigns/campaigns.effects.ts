import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as CampaignsActions from './campaigns.actions';
import { AppState } from 'app/state';
import { HttpService } from 'app/core/http/http.service';
import { GetCampaignsResDtoInterface } from '@common';
import { initialState } from './campaigns.model';

@Injectable()
export class CampaignsEffects {
  constructor(
    private actions$: Actions<CampaignsActions.All>,
    private router: Router,
    private store$: Store<AppState>,
    private http: HttpService
  ) {}

  @Effect() GetCampaigns: Observable<Action> = this.actions$.pipe(
    ofType(
      CampaignsActions.CAMPAIGNS_GET_ALL,
      CampaignsActions.SET_GET_CAMPAIGNS_PARAMS,
      CampaignsActions.HANDLE_INFINITY_SCROLL
    ),
    withLatestFrom(this.store$),
    switchMap(([action, store]: [
      CampaignsActions.GetCampaigns | CampaignsActions.SetGetCampaignsParams | CampaignsActions.HandleInfinityScroll,
      AppState]) => {
      const { search, status, limit, offset, sort } = store.campaigns.getCampaignsParams;

      const shouldClear = action.type !== CampaignsActions.HANDLE_INFINITY_SCROLL;

      if (shouldClear && offset !== 0) {
        return of(new CampaignsActions.SetGetCampaignsParams({
          limit: initialState.getCampaignsParams.limit,
          offset: initialState.getCampaignsParams.offset,
        }));
      }

      return this.http.getCampaigns(search, status, limit, offset, sort).pipe(
        map(
          (campaigns: GetCampaignsResDtoInterface) =>
            new CampaignsActions.GetCampaignsSuccess({ data: campaigns, shouldClear })
        ),
        catchError(err => of(new CampaignsActions.GetCampaignsFail(err)))
      );
    })
  );

  @Effect() RemoveCampaign: Observable<Action> = this.actions$.pipe(
    ofType(CampaignsActions.REMOVE_CAMPAIGN),
    map((action: CampaignsActions.RemoveCampaign) => action.payload),
    switchMap((id) =>
      this.http.removeCampaign(id).pipe(
        map(() => new CampaignsActions.RemoveCampaignSuccess(id)),
        catchError(err => of(new CampaignsActions.RemoveCampaignFail(err)))
      )
    )
  );
}
