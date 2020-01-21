import { GetCurrenciesResDtoInterface } from '@common';

export type CurrenciesState = Readonly<{
  list: GetCurrenciesResDtoInterface['rows'];
  isLoading: boolean;
  errorMessage: string | null;
}>;

export const initialState: CurrenciesState = {
  list: [],
  isLoading: false,
  errorMessage: null,
};
