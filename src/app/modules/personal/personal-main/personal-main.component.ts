import { Component, OnInit } from '@angular/core';
import {
  animate,
  animateChild,
  group,
  state,
  style,
  transition,
  trigger,
  query,
} from '@angular/animations';

import { config } from '@config/index';
import { Observable } from 'rxjs';
import { PersonalFacade, RecentWorkItem } from 'app/state/personal';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.scss'],
  animations: [
    trigger('resizeWidget', [
      state('false', style({ height: '280px', width: '266px', position: 'absolute' })),
      state('true', style({ height: '560px', width: '360px', position: 'absolute' })),
      transition(
        'false => true',
        group([
          animate('0.5s ease-in-out'),
          query('.workspace__container-expanded__scrollable', [
            style({ opacity: 0 }),
            animate('500ms 300ms ease-in-out', style({ opacity: 1 })),
          ]),
        ])
      ),
      transition(
        'true => false',
        group([
          query('.workspace__container-expanded__scrollable', [
            style({ opacity: 0 }),
            animate('500ms 300ms ease-in-out', style({ opacity: 1 })),
          ]),
          animate('0.5s ease-in-out'),
        ])
      ),
    ]),
  ],
})
export class PersonalMainComponent implements OnInit {
  public recentWorks$: Observable<RecentWorkItem[]>;
  public isClientWidgetExpanded = false;

  constructor(private personalFacade: PersonalFacade) {}

  ngOnInit() {
    this.recentWorks$ = this.personalFacade.recentWork$;
    this.personalFacade.getRecentWork();
  }

  public toggleWidget(isExpanded: boolean): void {
    this.isClientWidgetExpanded = isExpanded;
  }
}
