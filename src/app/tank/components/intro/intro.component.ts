import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'style-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IntroComponent {
    public constructor() {
        return;
    }
}
