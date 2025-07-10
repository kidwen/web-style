import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { MatButton } from '@angular/material/button';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'style-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ChildComponent, MatButton],
})
export class ParentComponent {
    public user: User = { id: 'kidwen', name: 'kidwen' };

    public changeUserName(): void {
        if (this.user.name === 'kidwen') {
            this.user = { ...this.user, name: 'kid-wen' };
        } else {
            this.user = { ...this.user, name: 'kidwen' };
        }
    }
}
