import { GetCampaignsResDtoInterface } from '@common';

export const CAMPAIGNS_PER_REQUEST = 16;

export interface CampaignsParams {
  search?: string | null;
  status?: string | null;
  offset?: number | null;
  limit?: number | null;
  sort?: string | null;
}

export type CampaignsState = Readonly<{
  list: GetCampaignsResDtoInterface['rows'];
  isLoading: boolean;
  count: GetCampaignsResDtoInterface['count'];
  getCampaignsParams?: CampaignsParams | null;
  errorMessage: string | null;
}>;

export const initialState: CampaignsState = {
  list: [],
  count: 0,
  getCampaignsParams: {
    search: null,
    status: null,
    offset: 0,
    limit: CAMPAIGNS_PER_REQUEST,
  },
  isLoading: false,
  errorMessage: null,
};
