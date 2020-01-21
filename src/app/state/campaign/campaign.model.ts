import { GetCampaignResDtoInterface, KeywordTypes } from '@common';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { safeJSONParse } from 'app/shared/utils/safe-json-parse';

export type CampaignState = Readonly<{
  campaign: GetCampaignResDtoInterface;
  isLoading: boolean;
  errorMessage: string;
}>;

export const initialState: CampaignState = {
  campaign: null,
  isLoading: false,
  errorMessage: null,
};

export const getCampaignState = createFeatureSelector<CampaignState>('campaign');

export const getCampaignStrategyValuesByType = createSelector(
  getCampaignState,
  (state: CampaignState) => {
    const impressionShareStrategy: number[][] = safeJSONParse(state.campaign.impressionShareStrategy);
    if (!_.isArray(impressionShareStrategy)) {
      return null;
    }

    return _.reduce(impressionShareStrategy, (acc, value) => {
      acc[KeywordTypes.BRAND].push(value[0] * 100);
      acc[KeywordTypes.GENERIC].push(value[1] * 100);
      acc[KeywordTypes.COMPETITOR].push(value[2] * 100);
      return acc;
    }, {
      [KeywordTypes.BRAND]: [],
      [KeywordTypes.GENERIC]: [],
      [KeywordTypes.COMPETITOR]: [],
    });
  }
);

export const isMarketSupported = createSelector(
  getCampaignState,
  (state: CampaignState) => _.get(state, 'campaign.market.supported', false)
);
