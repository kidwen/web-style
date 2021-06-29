import { Component, Input } from '@angular/core';
import { MatButtonProperty } from '../../model/mat-button.model';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {

    @Input()
    public links?: Array<MatButtonProperty>;

}
