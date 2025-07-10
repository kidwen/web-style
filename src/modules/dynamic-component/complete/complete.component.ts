import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GreeterDirective } from '../../directives/greeter.directive';

@Component({
    selector: 'style-complete',
    styleUrls: ['./complete.component.scss'],
    templateUrl: './complete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})

export class CompleteComponent {
    public greeter = inject(GreeterDirective);

}
