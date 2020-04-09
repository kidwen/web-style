import { Component } from '@angular/core';

@Component({
    selector: 'style-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
    public divContent?: string;

    public getI(): string {
        return 'Click';
    }
}
