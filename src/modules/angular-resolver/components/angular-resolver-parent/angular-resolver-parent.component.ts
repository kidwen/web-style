import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AngularResolverBrotherComponent } from '../angular-resolver-brother/angular-resolver-brother.component'
import { AngularResolverChildComponent } from '../angular-resolver-child/angular-resolver-child.component'

@Component({
    selector: 'app-angular-resolver',
    templateUrl: './angular-resolver-parent.component.html',
    styleUrls: ['./angular-resolver-parent.component.scss'],
    standalone: true,
    imports: [AngularResolverBrotherComponent, AngularResolverChildComponent],
})

export class AngularResolverParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
    public constructor() {
        console.log('angular-resolver-parent: constructor');
    }

    public ngOnChanges(): void {
        console.log('angular-resolver-parent: ngOnChanges');
    }

    public ngOnInit(): void {
        console.log('angular-resolver-parent: ngOnInit');
    }

    public ngDoCheck(): void {
        console.log('angular-resolver-parent: ngDoCheck');
    }

    public ngAfterContentInit(): void {
        console.log('angular-resolver-parent: ngAfterContentInit');
    }

    public ngAfterContentChecked(): void {
        console.log('angular-resolver-parent: ngAfterContentChecked');
    }

    public ngAfterViewInit(): void {
        console.log('angular-resolver-parent: ngAfterViewInit');
    }

    public ngAfterViewChecked(): void {
        console.log('angular-resolver-parent: ngAfterViewChecked');
    }

    public ngOnDestroy(): void {
        console.log('angular-resolver-parent: ngOnDestroy');
    }

}
