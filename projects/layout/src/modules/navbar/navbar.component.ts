import { Component, Input } from '@angular/core';
import { MatButtonProperty } from '@kidwen/layout';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {

    @Input()
    public links?: Array<MatButtonProperty>;

}
