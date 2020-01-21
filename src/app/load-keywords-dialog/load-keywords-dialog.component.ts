import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/state';
import { LoadApiKeywords } from '../state/keywords';
import { KeywordTypes } from '@common';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-load-keywords-dialog',
  templateUrl: './load-keywords-dialog.component.html',
  styleUrls: ['./load-keywords-dialog.component.scss'],
})
export class LoadKeywordsDialogComponent {
  isLoading = false;
  amounts = [
    {
      label: '10 Keywords',
      value: 10,
    },
    {
      label: '20 Keywords',
      value: 20,
    },
    {
      label: '30 Keywords',
      value: 30,
    },
  ];
  keywordsAmount = new FormControl(_.last(this.amounts).value, Validators.required);

  constructor(
    public dialogRef: MatDialogRef<LoadKeywordsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: KeywordTypes },
    private store$: Store<AppState>
  ) {}

  addKeywords(): void {
    this.isLoading = true;
    this.store$.dispatch(new LoadApiKeywords({
      limit: this.keywordsAmount.value,
      type: this.data.type,
    }));

    this.store$.pipe(
      select(store => store.keywords.isLoading),
      filter(isLoading => !isLoading),
      take(1)
    ).subscribe(() => {
      this.dialogRef.close(false);
    });

  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
