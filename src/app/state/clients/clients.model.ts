export interface Client {
  id: string;
  logo: string;
  name: string;
  mine: boolean;
  markets?: any[]; // to be filled after adding countries
  categoryNames?: string[];
  description?: string;
}

export interface Market {
  status: string;
  name: string;
  code: string;
  region?: number;
  mine: boolean;
}

export interface Region {
  name: string;
  id: number;
  markets: Market[];
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  status: string;
  code: string;
  contactPhone: string;
  contactName: string;
  contactEmail: string;
  logo: string;
  websiteUrl: string;
  facebookProfileUrl: string;
  instagramProfileUrl: string;
  clientId: string;
  country: Market;
  categoryNames?: string[];
}

export interface ClientsState {
  clients: Client[];
  selectedClient: Client;
  selectedBrand: Brand;
  brands: Brand[];
  loading: boolean;
}

export const initialState: ClientsState = {
  clients: null,
  selectedClient: null,
  selectedBrand: null,
  brands: null,
  loading: false,
};
