import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatButtonProperty } from '@kidwen/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { routes } from '../../../../modules/home-routing.module';

@Component({
    selector: 'style-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnDestroy {

    public links: Array<MatButtonProperty> = new Array<MatButtonProperty>();

    public selectedMenu: string = 'Intro';

    private sub?: Subscription;

    public constructor(
        private router: Router,
    ) {
        this.sub = this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        ).subscribe(e => {
            this.selectedMenu = this.links.find(l => e.url.includes(l.routerLink.split('/')[1]))?.text ?? this.selectedMenu;
        });
        this.links = routes.map(item => ({
            routerLink: item.path,
            text: item.data?.title,
        }));
        this.selectedMenu = this.links.find(l => window.location.pathname.includes(l.routerLink))?.text ?? this.selectedMenu;
    }

    public onSelected(e: string): void {
        this.selectedMenu = e;
    }

    public ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
