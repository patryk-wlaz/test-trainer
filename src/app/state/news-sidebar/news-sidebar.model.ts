export interface NewsArticle {
  title: string;
  time: string;
  thumbnailUrl: string;
}

export interface NewsSidebarState {
  opened: boolean;
  articles: NewsArticle[];
  loading: boolean;
}

export const initialState: NewsSidebarState = {
  opened: false,
  articles: [],
  loading: false,
};
