import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactsListDialogComponent } from 'app/contacts-list-dialog/contacts-list-dialog';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss'],
})
export class ForbiddenComponent implements OnInit {

  constructor (public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactsListDialogComponent, {
      width: '70%',
    });
  }

}
