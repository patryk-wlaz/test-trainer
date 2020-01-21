import { Action } from '@ngrx/store';
import { GetCampaignsResDtoInterface, GetCampaignResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';
import { CampaignsParams } from './campaigns.model';

export const CAMPAIGNS_GET_ALL = '[Campaigns] Get All';
export const CAMPAIGNS_GET_ALL_SUCCESS = '[Campaigns] Get All Success';
export const CAMPAIGNS_GET_ALL_FAIL = '[Campaigns] Get All Fail';

export const SET_GET_CAMPAIGNS_PARAMS = '[Campaigns] Set get campaigns params';
export const HANDLE_INFINITY_SCROLL = '[Campaigns] Handle infinity scroll';

export const REMOVE_CAMPAIGN = '[Campaigns] Remove Campaign';
export const REMOVE_CAMPAIGN_SUCCESS = '[Campaigns] Remove Campaign Success';
export const REMOVE_CAMPAIGN_FAIL = '[Campaigns] Remove Campaign Fail';

export class GetCampaigns implements Action {
  readonly type = CAMPAIGNS_GET_ALL;

  constructor(readonly payload?: any) {}
}

export class GetCampaignsSuccess implements Action {
  readonly type = CAMPAIGNS_GET_ALL_SUCCESS;

  constructor(readonly payload: { data: GetCampaignsResDtoInterface, shouldClear: boolean }) {}
}

export class GetCampaignsFail implements Action {
  readonly type = CAMPAIGNS_GET_ALL_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class SetGetCampaignsParams implements Action {
  readonly type = SET_GET_CAMPAIGNS_PARAMS;

  constructor(readonly payload: CampaignsParams) {}
}

export class HandleInfinityScroll implements Action {
  readonly type = HANDLE_INFINITY_SCROLL;

  constructor(readonly payload?: any) {}
}

export class RemoveCampaign implements Action {
  readonly type = REMOVE_CAMPAIGN;

  constructor (readonly payload: GetCampaignResDtoInterface['id']) { }
}

export class RemoveCampaignSuccess implements Action {
  readonly type = REMOVE_CAMPAIGN_SUCCESS;

  constructor (readonly payload: GetCampaignResDtoInterface['id']) { }
}

export class RemoveCampaignFail implements Action {
  readonly type = REMOVE_CAMPAIGN_FAIL;

  constructor (readonly payload: HttpErrorResponse) { }
}

export type All =
  | GetCampaigns
  | GetCampaignsSuccess
  | GetCampaignsFail
  | SetGetCampaignsParams
  | HandleInfinityScroll
  | RemoveCampaign
  | RemoveCampaignSuccess
  | RemoveCampaignFail;
