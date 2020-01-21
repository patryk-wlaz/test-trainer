import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FilterPipe } from './utils/filter.pipe';
import { SearchPipe } from './utils/search.pipe';
import { LoadingSpinnerComponent } from 'app/loading-spinner/loading-spinner.component';
import { TableMessageRowComponent } from 'app/table-message-row/table-message-row.component';
import { SortByCreationPipe } from './utils/sortByCreation.pipe';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog';
import { SortByPipe } from './utils/sortBy.pipe';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    ConfirmationDialogComponent,
    FilterPipe,
    SortByCreationPipe,
    SortByPipe,
    SearchPipe,
    LoadingSpinnerComponent,
    TableMessageRowComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FilterPipe,
    SortByPipe,
    SortByCreationPipe,
    SearchPipe,
    LoadingSpinnerComponent,
    TableMessageRowComponent,
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [
    FilterPipe,
    SortByPipe,
    SortByCreationPipe,
    SearchPipe,
  ],
})
export class SharedModule {}
