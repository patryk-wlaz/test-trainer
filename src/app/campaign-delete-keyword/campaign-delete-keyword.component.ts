import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-campaign-delete-keyword-dialog',
  templateUrl: './campaign-delete-keyword.component.html',
  styleUrls: ['./campaign-delete-keyword.component.scss'],
})
export class CampaignDeleteKeywordDialogComponent {
  constructor(public dialogRef: MatDialogRef<CampaignDeleteKeywordDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
