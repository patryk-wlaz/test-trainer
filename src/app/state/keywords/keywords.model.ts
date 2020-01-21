import * as _ from 'lodash';
import { AdsShareProperties, GetKeywordsResDtoInterface, KeywordTypeToIndex } from '@common';
import { KeywordTypes } from '@common';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CampaignState } from '@state/campaign';

export interface BudgetData {
  arh: number;
  budget: number;
}

export type KeywordsState = Readonly<{
  list: GetKeywordsResDtoInterface['rows']
  isLoading: boolean;
  errorMessage: string | null;
  budget: {
    [key in KeywordTypes]?: BudgetData;
  };
  currentTab: KeywordTypeToIndex;
}>;

export const initialState: KeywordsState = {
  list: [],
  isLoading: false,
  errorMessage: null,
  budget: {},
  currentTab: 0,
};

export const getKeywordsState = createFeatureSelector<KeywordsState>('keywords');

export const getActiveKeywords = createSelector(
  getKeywordsState,
  (state: KeywordsState) => _.filter(state.list, 'active')
);

export const getKeywordsByType = (type: KeywordTypes) => createSelector(
  getKeywordsState,
  (state: KeywordsState) => _.filter(state.list, { type })
);

export const getActiveKeywordsSummaryByType = createSelector(
  [getKeywordsState, createFeatureSelector<CampaignState>('campaign')],
  (keywordsState, campaign: CampaignState) => {
    const { budget: budgetByType } = keywordsState;
    if (!campaign || _.isEmpty(budgetByType)) {
      return [];
    }
    const { adsShare } = campaign.campaign;
    return _.map([KeywordTypes.BRAND, KeywordTypes.GENERIC, KeywordTypes.COMPETITOR], (type) => {
      const arh = budgetByType[type].arh;
      const budget = budgetByType[type].budget;
      if (!_.isNumber(budget) || !arh) {
        return {
          type,
        };
      }

      return ({
        type,
        arh,
        budget,
        brand: _.round(budget * (adsShare[AdsShareProperties.SPONSORED_BRAND] / 100)),
        product: _.round(budget * (adsShare[AdsShareProperties.SPONSORED_PRODUCT] / 100)),
        productDisplay: _.round(budget * (adsShare[AdsShareProperties.SPONSORED_PRODUCT_DISPLAY] / 100)),
      });
    });
  }
);

export const getActiveKeywordsSummary = createSelector(
  getActiveKeywordsSummaryByType,
  (activeKeywordsSummaryByType) => {
    let summary = {
      brand: null,
      product: null,
      productDisplay: null,
      budget: null,
    };
    summary = _.reduce(activeKeywordsSummaryByType, (acc, type) => {
      summary.brand += _.isNumber(type.brand) ? type.brand : null;
      summary.product += type.product || null;
      summary.productDisplay += type.productDisplay || null;
      summary.budget += type.budget || null;
      return summary;
    }, summary);
    return ({
      ...summary,
      arh: _.sumBy(activeKeywordsSummaryByType, 'arh') / _.filter(activeKeywordsSummaryByType, 'arh').length,
    });
  }
);

