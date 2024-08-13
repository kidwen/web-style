import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models';
import { UserService } from 'src/services';

@Component({
    selector: 'app-template-variables',
    templateUrl: './template-variables.component.html',
    styleUrls: ['./template-variables.component.scss'],
})

export class TemplateVariablesComponent {

    public user$: Observable<User>;

    public readonly code =
`<div *ngIf="user$ | async as user">
    {{ user.id }} {{ user.name }} - used by *ngIf
</div>

@if (user$ | async; as user) {
    {{ user.id }} {{ user.name }} - used by @if
}`

    public points$: Observable<number>;

    public constructor(
        private userService: UserService,
    ) {
        this.user$ = this.userService.getUser();
        this.points$ = of(0);
    }

}
