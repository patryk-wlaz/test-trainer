import { Component, OnInit } from '@angular/core';
import { NewsSidebarFacade, NewsArticle } from 'app/state/news-sidebar';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss'],
})
export class NewsSidebarComponent implements OnInit {
  public articles$: Observable<NewsArticle[]>;
  public latestNews$: Observable<NewsArticle>;
  public newsSidebarOpened$: Observable<boolean>;

  constructor(private newsSidebarFacade: NewsSidebarFacade) { }

  ngOnInit() {
    this.newsSidebarFacade.getArticles();
    this.articles$ = this.newsSidebarFacade.articles$;
    this.latestNews$ = this.newsSidebarFacade.articles$.pipe(
      map(articles => _.first(articles))
    );
    this.newsSidebarOpened$ = this.newsSidebarFacade.opened$;
  }

  closeDrawer() {
    this.newsSidebarFacade.closeNewsSidebar();
  }
}
