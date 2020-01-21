import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  @Input() public isExample: boolean;
  @Input() public isExpandedOnStart: boolean;
  @Input() public isBrandChoosen = true;
  @ViewChild('waveAnimation', { static: true }) waveAnimation: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.waveAnimation.nativeElement.oncanplaythrough = () => {
      this.waveAnimation.nativeElement.muted = true;
      this.waveAnimation.nativeElement.play();
    };
    setTimeout(() => this.waveAnimation.nativeElement.classList.add('on'), 1);
  }
}
