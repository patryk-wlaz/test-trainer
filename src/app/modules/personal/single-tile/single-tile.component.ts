import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-tile',
  templateUrl: './single-tile.component.html',
  styleUrls: ['./single-tile.component.scss'],
})
export class SingleTileComponent {

  @Input() public client: any;

  constructor() { }

}
