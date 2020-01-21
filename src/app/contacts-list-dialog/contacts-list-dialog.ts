import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts-list-dialog',
  templateUrl: './contacts-list-dialog.html',
  styleUrls: ['./contacts-list-dialog.scss'],
})
export class ContactsListDialogComponent {
  constructor (
    public dialogRef: MatDialogRef<ContactsListDialogComponent>
  ) { }
}
