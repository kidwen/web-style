import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'style-animate',
    templateUrl: './animate.component.html',
    styleUrls: ['./animate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AnimateComponent {

}
