import { Component, OnInit } from '@angular/core';
import { registerMarketAdminApp } from 'src/single-spa/market-admin';

@Component({
  selector: 'app-market-admin-wrapper',
  templateUrl: './market-admin-wrapper.component.html',
})
export class MarketAdminWrapperComponent implements OnInit {
  ngOnInit() {
    registerMarketAdminApp();
  }
}
