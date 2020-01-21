import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabHeaderComponent {
  @Input('errorCondition') errorCondition: boolean;
  @Input('errorMessage') errorMessage: string;
  @Input('defaultTooltip') defaultTooltip: string;
  @Input('errorIcon') errorIcon: string;
  @Input('label') label: string;
  @Input('counter') counter: number;

  constructor() { }
}
