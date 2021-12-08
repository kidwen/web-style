import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-table-demo',
    templateUrl: './table-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableDemoComponent {
}
