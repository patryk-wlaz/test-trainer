import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-campaign-delete-product-dialog',
  templateUrl: './campaign-delete-product.component.html',
  styleUrls: ['./campaign-delete-product.component.scss'],
})
export class CampaignDeleteProductDialogComponent {
  constructor(public dialogRef: MatDialogRef<CampaignDeleteProductDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
