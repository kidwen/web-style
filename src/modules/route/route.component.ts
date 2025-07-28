import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss'],
    standalone: true,
    imports: [MatButton],
})

export class RouteComponent  {

    private id: number = 0;

    public constructor(
        private readonly router: Router,
    ) {}

    public handleClick(): void {
        this.id += 1;
        this.router.navigate(['/demos/route'], {queryParams: {id: this.id}});
    }
}
