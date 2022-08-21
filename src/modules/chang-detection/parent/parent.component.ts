import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from 'src/model/user.model';

@Component({
    selector: 'style-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
    public user: User = { name: 'kidwen' };

    public changeUserName() {
        if (this.user.name === 'kidwen') {
            this.user = { ...this.user, name: 'kid-wen' };
        } else {
            this.user = { ...this.user, name: 'kidwen' };
        }
    }
}
