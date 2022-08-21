import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatButtonProperty } from '@kidwen/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'style-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnDestroy {

    public links: Array<MatButtonProperty> = [{
        routerLink: './animate',
        text: 'Animate',
    }, {
        routerLink: './center',
        text: 'Center',
    }, {
        routerLink: './css',
        text: 'Css',
    }, {
        routerLink: './position',
        text: 'Position',
    }, {
        routerLink: './rxjs',
        text: 'Rxjs',
    }, {
        routerLink: './shadow',
        text: 'Shadow',
    }, {
        routerLink: './change-detection',
        text: 'ChangeDetection',
    }, {
        routerLink: './dynamic-component',
        text: 'DynamicComponent',
    }];

    public selectedMenu: string = 'Intro';

    private sub?: Subscription;


    public constructor(
        private router: Router,
    ) {
        this.sub = this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        ).subscribe(e => {
            this.selectedMenu = this.links.find(l => l.routerLink == e.url)?.text ?? this.selectedMenu;
        });
    }

    public onSelected(e: string): void {
        this.selectedMenu = e;
    }

    public ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
