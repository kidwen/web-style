import { Component } from '@angular/core';
import { MatButtonProperty } from '@kidwen/layout';

@Component({
    selector: 'style-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    public links: Array<MatButtonProperty> = [{
        routerLink: '/demos/home',
        text: 'home',
    }, {
        routerLink: '/demos/rxjs',
        text: 'rxjs',
    }, {
        routerLink: '/demos/position',
        text: 'position',
    }, {
        routerLink: '/demos/css',
        text: 'css',
    }, {
        routerLink: '/demos/animate',
        text: 'animate',
    }, {
        routerLink: '/demos/ant-grid',
        text: 'ant-grid',
    }];
}
