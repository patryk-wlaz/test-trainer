import { Action } from '@ngrx/store';

import { GetStrategyResDtoInterface, Campaign, Strategy } from '@common';

export const STRATEGIES_GET_FOR_CAMPAIGN = '[Strategies] Get all campaign strategies';
export const STRATEGIES_GET_FOR_CAMPAIGN_SUCCESS = '[Strategies] Get all campaign strategies success';
export const STRATEGIES_GET_FOR_CAMPAIGN_FAIL = '[Strategies] Get all campaign strategies fail';

export const STRATEGIES_UPDATE_STRATEGY = '[Strategies] Update strategy';
export const STRATEGIES_UPDATE_STRATEGY_SUCCESS = '[Strategies] Update strategy success';
export const STRATEGIES_UPDATE_STRATEGY_FAIL = '[Strategies] Update strategy fail';

export class GetCampaignStrategies implements Action {
  readonly type = STRATEGIES_GET_FOR_CAMPAIGN;

  constructor(readonly payload: Campaign['id']) {}
}

export class GetCampaignStrategiesSuccess implements Action {
  readonly type = STRATEGIES_GET_FOR_CAMPAIGN_SUCCESS;

  constructor(readonly payload?: GetStrategyResDtoInterface[]) { }
}

export class GetCampaignStrategiesFail implements Action {
  readonly type = STRATEGIES_GET_FOR_CAMPAIGN_FAIL;

  constructor(readonly payload: Error) { }
}

export class UpdateStrategy implements Action {
  readonly type = STRATEGIES_UPDATE_STRATEGY;

  constructor(readonly payload: { id: Strategy['id'], values: number[][] }) { }
}

export class UpdateStrategySuccess implements Action {
  readonly type = STRATEGIES_UPDATE_STRATEGY_SUCCESS;

  constructor(readonly payload: GetStrategyResDtoInterface) { }
}

export class UpdateStrategyFail implements Action {
  readonly type = STRATEGIES_UPDATE_STRATEGY_FAIL;

  constructor(readonly payload: Error) { }
}

export type All = GetCampaignStrategies
  | GetCampaignStrategiesFail
  | GetCampaignStrategiesSuccess
  | UpdateStrategy
  | UpdateStrategyFail
  | UpdateStrategySuccess;
