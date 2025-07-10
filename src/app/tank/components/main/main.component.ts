import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatButtonProperty } from '@kidwen/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { routes } from '../../../../modules/home-routing.module';
import { MenuNavComponent } from '../../../../../projects/layout/src/modules/menu-nav/menu-nav.component';
import { FooterComponent } from '../../../../../projects/layout/src/modules/footer/footer.component';

@Component({
    selector: 'style-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatSidenavContainer,
        MenuNavComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class MainComponent implements OnDestroy {
    private router = inject(Router);


    public links: Array<MatButtonProperty> = new Array<MatButtonProperty>();

    public selectedMenu: string = 'Intro';

    private sub?: Subscription;

    public constructor() {
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
