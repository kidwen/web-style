import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatButtonProperty } from '../../model/mat-button.model';
@Component({
    selector: 'lib-menu-nav',
    templateUrl: './menu-nav.component.html',
    styleUrls: ['./menu-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuNavComponent implements AfterContentInit, OnDestroy {
    @Input()
    public links?: Array<MatButtonProperty>;

    @Output()
    public readonly onSelected: EventEmitter<string> = new EventEmitter<string>();

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
