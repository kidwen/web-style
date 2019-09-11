import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ts-dom',
  templateUrl: './ts-dom.component.html',
  styleUrls: ['./ts-dom.component.scss']
})

export class TsDomComponent implements AfterViewInit {
  @ViewChild('bar', null)
  public bar?: ElementRef;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  public ngAfterViewInit() {
    this.renderer.setStyle(this.bar.nativeElement, 'width', '5rem'); // 注意一定要有单位
  }
}
