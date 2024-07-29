import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../models';

@Component({
    selector: 'app-angular-resolver-brother',
    template: `111`,
    standalone: true,
    styles: [],
})

export class AngularResolverBrotherComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input()
    public user: User;

    public constructor() {
        console.log('angular-resolver-brother: constructor');
    }

    public ngOnChanges(): void {
        console.log('angular-resolver-brother: ngOnChanges');
    }

    public ngOnInit(): void {
        console.log('angular-resolver-brother: ngOnInit');
    }

    public ngDoCheck(): void {
        console.log('angular-resolver-brother: ngDoCheck');
    }

    public ngAfterContentInit(): void {
        console.log('angular-resolver-brother: ngAfterContentInit');
    }

    public ngAfterContentChecked(): void {
        console.log('angular-resolver-brother: ngAfterContentChecked');
    }

    public ngAfterViewInit(): void {
        console.log('angular-resolver-brother: ngAfterViewInit');
    }

    public ngAfterViewChecked(): void {
        console.log('angular-resolver-brother: ngAfterViewChecked');
    }

    public ngOnDestroy(): void {
        console.log('angular-resolver-brother: ngOnDestroy');
    }
}
