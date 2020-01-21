import { Action } from '@ngrx/store';
import {
  CreateCampaignDtoInterface,
  GetCampaignResDtoInterface,
  UpdateCampaignDtoInterface,
  Campaign,
  DuplicateCampaignResDtoInterface,
} from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_CAMPAIGN = '[Campaign] Get Campaign';
export const GET_CAMPAIGN_SUCCESS = '[Campaign] Get Campaign Success';
export const GET_CAMPAIGN_FAIL = '[Campaign] Get Campaign Fail';

export const SAVE_CAMPAIGN = '[Campaign] Save Campaign';
export const SAVE_CAMPAIGN_SUCCESS = '[Campaign] Save Campaign Success';
export const SAVE_CAMPAIGN_FAIL = '[Campaign] Save Campaign Fail';

export const UPDATE_CAMPAIGN = '[Campaign] Update Campaign';
export const UPDATE_CAMPAIGN_SUCCESS = '[Campaign] Update Campaign Success';
export const UPDATE_CAMPAIGN_FAIL = '[Campaign] Update Campaign Fail';

export const UPDATE_CAMPAIGN_AD_SPLIT = '[Campaign] Update Campaign Ad Split';

export const DUPLICATE_CAMPAIGN = '[Campaign] Duplicate Campaign';
export const DUPLICATE_CAMPAIGN_SUCCESS = '[Campaign] Duplicate Campaign Success';
export const DUPLICATE_CAMPAIGN_FAIL = '[Campaign] Duplicate Campaign Fail';

export class GetCampaign implements Action {
  readonly type = GET_CAMPAIGN;

  constructor (readonly payload?: any) { }
}

export class GetCampaignSuccess implements Action {
  readonly type = GET_CAMPAIGN_SUCCESS;

  constructor (readonly payload: Partial<GetCampaignResDtoInterface>) { }
}

export class GetCampaignFail implements Action {
  readonly type = GET_CAMPAIGN_FAIL;

  constructor (readonly payload: HttpErrorResponse) { }
}

export class SaveCampaign implements Action {
  readonly type = SAVE_CAMPAIGN;

  constructor (readonly payload: CreateCampaignDtoInterface) { }
}

export class SaveCampaignSuccess implements Action {
  readonly type = SAVE_CAMPAIGN_SUCCESS;

  constructor (readonly payload: GetCampaignResDtoInterface) { }
}

export class SaveCampaignFail implements Action {
  readonly type = SAVE_CAMPAIGN_FAIL;

  constructor (readonly payload: HttpErrorResponse) { }
}

export class UpdateCampaignAdSplit implements Action {
  readonly type = UPDATE_CAMPAIGN_AD_SPLIT;

  constructor (readonly payload: { campaignData: { adsShare: number[] }, campaignId: Campaign['id'] }) { }
}

export class UpdateCampaign implements Action {
  readonly type = UPDATE_CAMPAIGN;

  constructor (readonly payload: {
    campaignId: GetCampaignResDtoInterface['id'],
    campaignData: UpdateCampaignDtoInterface,
    goTo?: string }) { }
}

export class UpdateCampaignSuccess implements Action {
  readonly type = UPDATE_CAMPAIGN_SUCCESS;

  constructor (readonly payload: GetCampaignResDtoInterface) { }
}

export class UpdateCampaignFail implements Action {
  readonly type = UPDATE_CAMPAIGN_FAIL;

  constructor (readonly payload: HttpErrorResponse) { }
}

export class DuplicateCampaign implements Action {
  readonly type = DUPLICATE_CAMPAIGN;

  constructor (readonly payload: Campaign['id']) { }
}

export class DuplicateCampaignSuccess implements Action {
  readonly type = DUPLICATE_CAMPAIGN_SUCCESS;

  constructor (readonly payload: DuplicateCampaignResDtoInterface) { }
}

export class DuplicateCampaignFail implements Action {
  readonly type = DUPLICATE_CAMPAIGN_FAIL;

  constructor (readonly payload: HttpErrorResponse) { }
}

export type All =
  | GetCampaign
  | GetCampaignSuccess
  | GetCampaignFail

  | SaveCampaign
  | SaveCampaignSuccess
  | SaveCampaignFail

  | UpdateCampaign
  | UpdateCampaignSuccess
  | UpdateCampaignFail

  | UpdateCampaignAdSplit

  | DuplicateCampaign
  | DuplicateCampaignSuccess
  | DuplicateCampaignFail;
