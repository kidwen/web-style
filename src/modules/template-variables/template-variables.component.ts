import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models';
import { UserService } from 'src/services';
import { code } from './template-variables.code';

@Component({
    selector: 'app-template-variables',
    templateUrl: './template-variables.component.html',
    styleUrls: ['./template-variables.component.scss'],
})

export class TemplateVariablesComponent {

    public user$: Observable<User>;

    public readonly code = code;

    public points$: Observable<number>;

    public constructor(
        private userService: UserService,
    ) {
        this.user$ = this.userService.getUser();
        this.points$ = of(0);
    }

}
