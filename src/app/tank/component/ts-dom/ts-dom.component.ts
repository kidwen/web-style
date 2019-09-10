import { Component, OnInit, ElementRef, Renderer, AfterViewInit, ViewChild } from '@angular/core';

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
    // tslint:disable-next-line: deprecation
    private renderer: Renderer,
  ) { }

  public ngAfterViewInit() {
    this.renderer.setElementStyle(this.bar.nativeElement, 'width', '5rem');
  }
}
