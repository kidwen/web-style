import { Component, EventEmitter, Input, Output, AfterContentInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatButtonProperty } from '@kidwen/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'lib-menu-nav',
    templateUrl: './menu-nav.component.html',
    styleUrls: ['./menu-nav.component.scss'],
})

export class MenuNavComponent implements AfterContentInit, OnDestroy {
    @Input()
    public links?: Array<MatButtonProperty>;

    @Output()
    // eslint-disable-next-line @angular-eslint/prefer-output-readonly
    public onSelected: EventEmitter<string> = new EventEmitter<string>();

    public menuSelected?: string;

    private url?: string;

    private sub?: Subscription;

    public constructor(
        private router: Router,
    ) {
        this.sub = this.router.events.pipe(
            filter((e): e is NavigationEnd => {
                return e instanceof NavigationEnd;
            }),
        ).subscribe(e => {
            this.url = e.url;
        });
    }

    public ngAfterContentInit(): void {
        let link = this.links?.find(l => {
            return l.routerLink == this.url;
        });
        this.menuSelected = link?.text;
    }

    public menuClick(text: string): void {
        this.menuSelected = text;
        this.onSelected.emit(text);
    }

    public ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}

