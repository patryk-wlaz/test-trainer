import { Component, Renderer2, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Client, Market, ClientsFacade, Brand, Region } from 'app/state/clients';
import { defaults } from '@config/defaults';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
})
export class MarketListComponent implements OnInit, OnChanges {

  public currentSubNavExpanded: HTMLElement;
  public regions = defaults.regions;
  public regionsList: { name: string, id: number, markets: Market[] }[];
  public allRegionsList: { name: string, id: number, markets: Market[] }[];
  public mineRegionsList: { name: string, id: number, markets: Market[] }[] = [];
  public brands = [];
  public isShowedOnlyMineMarkets = new FormControl();

  @Input() public client: Client;

  constructor(
    private renderer: Renderer2,
    private clientsFacade: ClientsFacade
  ) { }

  ngOnInit(): void {
    this.createMarketsList(this.client.markets);
    this.clientsFacade.brands$.pipe(
      filter((brands) => !!brands)
    ).subscribe(brands => {
      this.brands = brands;
    });
  }

  ngOnChanges(): void {
  }

  private createMarketsList(markets: Market[]): void {
    this.allRegionsList = this.regions.map(region => {

      region.markets = markets.filter(market => {
        return market.region === region.id;
      });
      return region;
    });
    this.regionsList = this.allRegionsList;
  }

  public filterRegionsList(regionsList: Region[]): Region[] {
    const customRegionsList = new Array(regionsList);
    const filteredRegionList = regionsList.map(region => {
      const filteredRegion = (array) => array.filter(market => {
        return market.mine;
      });
      region.markets = filteredRegion(region.markets);
      return region;
    });
    return new Array(...filteredRegionList);
  }

  public handleSectionClick(event: Event, countryCode: string, countryMine: boolean) {
    this.brands = [];
    if (!countryMine) {
      return;
    }
    this.clientsFacade.getBrands(this.client.id, countryCode);
    this.toggleClass(event);
  }

  public toggleClass(event: Event): void {
    const parentTarget = (event.target as Element).parentElement;
    const hasClass = parentTarget.classList.contains('clicked');
    if (hasClass) {
      this.renderer.removeClass(this.currentSubNavExpanded, 'clicked');
      this.currentSubNavExpanded = null;
      return;
    }
    if (this.currentSubNavExpanded) {
      this.renderer.removeClass(this.currentSubNavExpanded, 'clicked');
    }
    this.renderer.addClass(parentTarget, 'clicked');
    this.currentSubNavExpanded = parentTarget;
    return;
  }

  public getRoute(brand: Brand): string {
    return `/clients/${brand.clientId}/markets/${brand.country.code}/brands/${brand.id}`;
  }

  public toggleMarketsFilter(): void {
    if (!this.isShowedOnlyMineMarkets.value) {
      this.createMarketsList(this.client.markets);
      return;
    }
    this.filterRegionsList(this.regionsList);
    return;
  }

  public makeRequestForMarket(countryCode: string): void {
    this.clientsFacade.sendMarketRequest(this.client.id, countryCode);
  }
}
