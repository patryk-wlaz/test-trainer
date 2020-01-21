import { GetStrategyResDtoInterface, KeywordTypes } from '@common';
import { Omit } from 'src/app/shared/utils/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';

export interface StateStrategyItem extends Omit<GetStrategyResDtoInterface, 'values'> {
  values: number[][];
}

export interface StrategyValuesByType {
  [KeywordTypes.BRAND]: number[];
  [KeywordTypes.GENERIC]: number[];
  [KeywordTypes.COMPETITOR]: number[];
}

export interface StrategiesState {
  list: StateStrategyItem[];
  isLoading: boolean;
  errorMessage: string | null;
}

export const initialState: StrategiesState = {
  list: [],
  isLoading: false,
  errorMessage: null,
};

export const getStrategiesState = createFeatureSelector<StrategiesState>('strategies');

export const getStrategiesValuesByType = createSelector(
  getStrategiesState,
  (state: StrategiesState) =>
    _.map(state.list, (strategy) =>
      _.reduce(strategy.values, (acc, value, index) => {
        acc[KeywordTypes.BRAND][index] = value[0] && _.round(value[0] * 100);
        acc[KeywordTypes.GENERIC][index] = value[1] && _.round(value[1] * 100);
        acc[KeywordTypes.COMPETITOR][index] = value[2] && _.round(value[2] * 100);
        return acc;
      }, {
        ...strategy,
        [KeywordTypes.BRAND]: _.times(10, () => null),
        [KeywordTypes.GENERIC]: _.times(10, () => null),
        [KeywordTypes.COMPETITOR]: _.times(10, () => null),
      }))
);
