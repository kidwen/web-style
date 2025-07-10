import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models';
import { UserService } from 'src/services';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { AsyncPipe } from '@angular/common';
import { code } from './template-variables.code';

@Component({
    selector: 'app-template-variables',
    templateUrl: './template-variables.component.html',
    styleUrls: ['./template-variables.component.scss'],
    standalone: true,
    imports: [HighlightAuto, HighlightLineNumbers, AsyncPipe],
})
export class TemplateVariablesComponent {
    private userService = inject(UserService);

    public user$: Observable<User>;

    public readonly code = code;

    public points$: Observable<number>;

    public constructor() {
        this.user$ = this.userService.getUser();
        this.points$ = of(0);
    }
}
