import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-app';
  public constructor() {
    const test: Test = { s: 0 };
    const ss: string | number = test.s >= 0 ? test.s : '--';
    console.log(ss);
  }
}

export interface Test {
  s?: number;
}
