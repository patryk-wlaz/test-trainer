import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { MarketListComponent } from './components/market-list/market-list.component';

// pipes

@NgModule({
  // providers are forbidden in the SharedModule, use CoreModule instead
  declarations: [HeaderComponent, LayoutComponent, NewsSidebarComponent, MarketListComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, TranslateModule, ReactiveFormsModule],
  exports: [CommonModule, LayoutComponent, MaterialModule, FormsModule, TranslateModule, ReactiveFormsModule],
})
export class SharedModule { }
