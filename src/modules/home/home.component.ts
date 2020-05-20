import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'style-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    public items?: Array<MenuItem>;

    public ngOnInit(): void {
        this.items = [
            { label: 'New', icon: 'pi pi-fw pi-plus' },
            { label: 'Open', icon: 'pi pi-fw pi-download' },
            { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
        ];
    }
}
