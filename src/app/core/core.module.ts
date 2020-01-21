import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http/http.service';
import { MatIconService } from './mat-icon/mat-icon.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, MatIconService],
  exports: [],
})
export class CoreModule {}
