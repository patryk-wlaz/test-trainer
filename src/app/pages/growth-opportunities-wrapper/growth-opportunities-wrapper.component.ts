import { Component, OnInit } from '@angular/core';
import { registerGrowthOpportunitiesApp } from 'src/single-spa/growth-opportunities';

@Component({
  selector: 'app-growth-opportunities-wrapper',
  templateUrl: './growth-opportunities-wrapper.component.html',
})
export class GrowthOpportunitiesWrapperComponent implements OnInit {

  ngOnInit() {
    registerGrowthOpportunitiesApp();
  }

}
