import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactsListDialogComponent } from 'app/contacts-list-dialog/contacts-list-dialog';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent implements OnInit {

  constructor (public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactsListDialogComponent, {
      width: '70%',
    });
  }

}
