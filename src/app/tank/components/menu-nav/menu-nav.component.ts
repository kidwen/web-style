import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'style-menu-nav',
    templateUrl: './menu-nav.component.html',
    styleUrls: ['./menu-nav.component.scss'],
})

export class StyleMenuNavComponent implements OnInit {

    public links: Array<Link> = [{
        routerLink: '/',
        name: 'home',
    }, {
        routerLink: '/rxjs',
        name: 'rxjs',
    }, {
        routerLink: 'position',
        name: 'position',
    }, {
        routerLink: '/css',
        name: 'css',
    }, {
        routerLink: 'animate',
        name: 'animate',
    }, {
        routerLink: '404',
        name: '404',
    }];

    public ngOnInit(): void {
        return;
    }
}

interface Link {
    routerLink: string;
    name: string;
}
