import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatButtonProperty } from '@kidwen/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'style-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterContentInit, OnDestroy {

    public links: Array<MatButtonProperty> = [{
        routerLink: '/demos/home',
        text: 'Home',
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

    public selectedMenu?: string;

    private sub?: Subscription;

    private url?: string;

    public constructor(
        private router: Router,
    ) {
        this.sub = this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        ).subscribe(e => {
            this.url = e.url;
        });
    }

    public ngAfterContentInit(): void {
        let link = this.links?.find(link => link.routerLink == this.url);
        this.selectedMenu = link?.text;
    }

    public onSelected(e: string): void {
        this.selectedMenu = e;
    }

    public ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
