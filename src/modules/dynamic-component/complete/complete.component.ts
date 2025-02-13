import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GreeterDirective } from '../../directives/greeter.directive';

@Component({
    selector: 'style-complete',
    styleUrls: ['./complete.component.scss'],
    templateUrl: './complete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CompleteComponent {
    public constructor(public greeter: GreeterDirective) {
        return;
    }
}
