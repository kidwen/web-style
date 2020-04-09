import { Component } from '@angular/core';

@Component({
    selector: 'style-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title: string = 'style-app';

    public openSideMenu: boolean = false;

    public hideSideMenu(): void {
        this.openSideMenu = false;
    }
}
