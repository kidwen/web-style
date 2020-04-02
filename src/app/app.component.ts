import { Component } from '@angular/core';

@Component({
    selector: 'style-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'style-app';

    public openSideMenu = false;

    public constructor() {
    }

    public hideSideMenu(): void {
        this.openSideMenu = false;
    }
}
