import { Component } from '@angular/core';

@Component({
  selector: 'style-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-app';

  public constructor() {
  }
}
