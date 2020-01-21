import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as NewsSidebarActions from './news-sidebar.actions';

@Injectable()
export class NewsSidebarFacade {
  public opened$ = this.store.select((state) => state.newsSidebar.opened);
  public articles$ = this.store.select((state) => state.newsSidebar.articles);

  constructor(private store: Store<AppState>) {}

  public openNewsSidebar(): void {
    this.store.dispatch(new NewsSidebarActions.OpenNewsSidebar());
  }

  public closeNewsSidebar(): void {
    this.store.dispatch(new NewsSidebarActions.CloseNewsSidebar());
  }

  public getArticles(): void {
    this.store.dispatch(new NewsSidebarActions.GetArticles());
  }
}
