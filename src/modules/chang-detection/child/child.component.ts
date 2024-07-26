import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
    selector: 'style-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    @Input()
    public user: User = { id: 'kidwen', name: 'kidwen' };
}
