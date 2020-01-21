import { GetMarketResDtoInterface, GetMarketsResDtoInterface } from '@common';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type MarketsState = Readonly<{
  list: GetMarketsResDtoInterface['rows'];
  isLoading: boolean;
  errorMessage: string | null;
}>;

export const initialState: MarketsState = {
  list: [],
  isLoading: false,
  errorMessage: null,
};

export const getMarketsState = createFeatureSelector<MarketsState>('markets');

export const getMarketsEntities = createSelector(
  getMarketsState,
  (state: MarketsState) => state.list
    .reduce((entities: { [id: string]: GetMarketResDtoInterface }, market: GetMarketResDtoInterface) => ({
      ...entities,
      [market.id]: market,
    }), {})
);
