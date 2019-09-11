import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-ts-dom',
  templateUrl: './ts-dom.component.html',
  styleUrls: ['./ts-dom.component.scss']
})

export class TsDomComponent implements AfterViewInit {
  @ViewChild('percentage', null)
  public percentage?: ElementRef;

  @ViewChild('bar', null)
  public bar?: ElementRef;

  @Input()
  public percentageWidth?: number;

  constructor(
    private renderer: Renderer2,
  ) { }

  public ngAfterViewInit() {
    if (this.percentageWidth) {
      const percentageWidth: number = this.percentage.nativeElement.offsetWidth;
      const barWidth: number = percentageWidth * this.percentageWidth;
      this.renderer.setStyle(this.bar.nativeElement, 'width', `${barWidth}px`); // 注意一定要有单位
    } else {
      this.renderer.setStyle(this.bar.nativeElement, 'width', '5rem'); // 注意一定要有单位
    }
  }
}
