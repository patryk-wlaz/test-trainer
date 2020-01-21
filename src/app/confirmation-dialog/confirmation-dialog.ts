import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

export interface ConfirmationDialogData {
  title?: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./confirmation-dialog.scss'],
})
export class ConfirmationDialogComponent {
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) { }

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
