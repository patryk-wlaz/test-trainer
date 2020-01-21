import { GetClientsResDtoInterface } from '@common';

export type ClientsState = Readonly<{
  list: GetClientsResDtoInterface['rows'];
  isLoading: boolean;
  errorMessage: string | null;
}>;

export const initialState: ClientsState = {
  list: [],
  isLoading: false,
  errorMessage: null,
};
