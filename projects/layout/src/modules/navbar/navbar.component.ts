import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonProperty } from '../../model/mat-button.model';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatAnchor,
        RouterLink,
        MatIcon,
    ],
})

export class NavbarComponent {

    @Input()
    public links?: Array<MatButtonProperty>;

    public theme: string = 'light_mode';

    public constructor() {
        this.theme = localStorage.getItem('theme') || 'light_mode';
        this.setTheme();
    }

    public switchTheme(): void {
        this.theme = this.theme === 'dark_mode' ? 'light_mode' : 'dark_mode';
        this.setTheme();
    }

    public setTheme(): void {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }
}
