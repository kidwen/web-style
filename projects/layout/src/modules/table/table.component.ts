import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-table,table[lib-table]',
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./table.component.scss'],
})

export class TableComponent {
    public constructor() {
        return;
    }

}
