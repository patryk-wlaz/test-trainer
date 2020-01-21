export interface RecentWorkItem {
  id: number;
  title: string;
  logo: string;
  market: string;
}

export interface PersonalContact {
  name: string;
  avatar: string;
  city: string;
  position: string;
  experience: string[];
}

export type PersonalState = Readonly<{
  loading: boolean;
  recentWork: RecentWorkItem[];
  personalContacts: PersonalContact[];
}>;

export const initialState: PersonalState = {
  loading: false,
  recentWork: [],
  personalContacts: [],
};
