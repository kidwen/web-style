import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'style-selector-name',
    templateUrl: './grid-select.component.html',
    styleUrls: ['./grid-select.component.scss'],
})

export class GridSelectComponent implements OnInit {
    public selectedValue: string = '';
    public ngOnInit(): void {
        return;
    }
}
