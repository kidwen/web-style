import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonProperty } from '@kidwen/layout';

@Component({
    selector: 'style-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title: string = 'style-app';

    public links: Array<MatButtonProperty> = [{
        routerLink: '',
        text: 'Welcome',
    }, {
        routerLink: '/demos',
        text: 'Demos',
    }, {
        routerLink: '/404',
        text: '404',
    }];

    public openSideMenu: boolean = false;

    public constructor() {
        localStorage.setItem('id', '123');
    }

}
