import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { User } from 'src/models';

@Component({
    selector: 'app-table-demo',
    templateUrl: './table-demo.component.html',
    styleUrl: './table-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableDemoComponent {

    public users: WritableSignal<Array<User>> = signal<Array<User>>([{
        id: '001',
        name: 'kidwen',
        age: 18,
    }, {
        id: '002',
        name: 'nick',
        age: 20,
    }]);
}
