import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import * as _ from 'lodash';

import { ClientsFacade, Client } from 'app/state/clients';

@Component({
  selector: 'app-workspace-widget',
  templateUrl: './workspace-widget.component.html',
  styleUrls: ['./workspace-widget.component.scss'],
})
export class WorkspaceWidgetComponent implements OnInit, OnDestroy {
  @Input() isExpanded: boolean;
  @Output() toggleWidget = new EventEmitter<boolean>();
  @ViewChild('workspaceContainer', { static: true }) workspaceContainer: ElementRef;

  private unsubscribe = new Subject();
  public loading$ = this.clientsFacade.loading$;
  private readonly divTagName = 'DIV';
  private readonly tilesClass = 'workspace__clients-tile--large';
  private readonly disabledTile = 'workspace__clients-tile--disabled';
  public searchValue: string;
  public allFilteredClients: Client[];
  // will be mocked for a while
  public myClients: Client[];
  public allClients: Client[];

  constructor(private clientsFacade: ClientsFacade) { }

  public ngOnInit() {
    this.workspaceContainer.nativeElement.addEventListener('click', (e) => {
      const tagClass = _.isString(e.target.className) ? e.target.className : '';

      if (
        (e.target.tagName !== this.divTagName && !tagClass.includes(this.disabledTile)) ||
        tagClass.includes(this.tilesClass)
      ) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      this.onToggleWidget();
    });

    this.getClients();
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getClients(): void {
    this.clientsFacade.getClients();
    this.clientsFacade.clients$
      .pipe(
        filter((clients) => !!clients),
        takeUntil(this.unsubscribe)
      )
      .subscribe((clients) => {
        this.allClients = clients.filter(val => !val.mine);
        this.myClients = clients.filter(val => val.mine);
        this.allFilteredClients = [...this.allClients];
      });
  }

  public onToggleWidget(): void {
    this.isExpanded = !this.isExpanded;
    this.toggleWidget.emit(this.isExpanded);
  }

  public onChangeSearchValue() {
    this.allFilteredClients = this.allClients.filter((item) =>
      item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  public getRoute(clientId: string): string {
    return `clients/${clientId}/markets`;
  }
}
