import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactsListDialogComponent } from 'app/contacts-list-dialog/contacts-list-dialog';
import { VersionsInfoModalComponent } from '../versions-info-modal/versions-info-modal';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainFooterComponent implements OnInit {
  version$: Observable<string>;

  public constructor (public dialog: MatDialog, private store: Store<AppState>) { }

  public openContactsListDialog(): void {
    const dialogRef = this.dialog.open(ContactsListDialogComponent, {
      width: '70%',
    });
  }

  public openVersionsModal(): void {
    const dialogRef = this.dialog.open(VersionsInfoModalComponent, {
      width: '70%',
    });
  }

  ngOnInit(): void {
    this.version$ = this.store.pipe(select((state) => state.settings.version));
  }

}
