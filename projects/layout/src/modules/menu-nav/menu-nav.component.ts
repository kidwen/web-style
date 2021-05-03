import { Component, Input } from '@angular/core';
import { MatButtonProperty } from '@kidwen/layout';

@Component({
    selector: 'style-menu-nav',
    templateUrl: './menu-nav.component.html',
    styleUrls: ['./menu-nav.component.scss'],
})

export class MenuNavComponent {

    @Input()
    public menuSelected?: string;

    @Input()
    public links?: Array<MatButtonProperty>;
}

