import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/models';

@Component({
    selector: 'app-angular-resolver-child',
    templateUrl: './angular-resolver-child.component.html',
    standalone: true,
    styleUrls: ['./angular-resolver-child.component.scss'],
})

export class AngularResolverChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input()
    public user: User;

    public constructor() {
        console.log('angular-resolver-child: constructor');
    }

    public ngOnChanges(): void {
        console.log('angular-resolver-child: ngOnChanges');
    }

    public ngOnInit(): void {
        console.log('angular-resolver-child: ngOnInit');
    }

    public ngDoCheck(): void {
        console.log('angular-resolver-child: ngDoCheck');
    }

    public ngAfterContentInit(): void {
        console.log('angular-resolver-child: ngAfterContentInit');
    }

    public ngAfterContentChecked(): void {
        console.log('angular-resolver-child: ngAfterContentChecked');
    }

    public ngAfterViewInit(): void {
        console.log('angular-resolver-child: ngAfterViewInit');
    }

    public ngAfterViewChecked(): void {
        console.log('angular-resolver-child: ngAfterViewChecked');
    }

    public ngOnDestroy(): void {
        console.log('angular-resolver-child: ngOnDestroy');
    }

}
