import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wm-ng-components-showcase',
  templateUrl: './wm-ng-components-showcase.component.html',
  styleUrls: ['./wm-ng-components-showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WmNgComponentsShowcaseComponent {
  constructor() { }
}
