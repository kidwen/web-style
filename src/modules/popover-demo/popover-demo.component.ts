import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PopoverDirective } from '../../../projects/layout/src/modules/popover/popover.directive';

@Component({
    selector: 'app-popover-demo',
    templateUrl: './popover-demo.component.html',
    styleUrls: ['./popover-demo.component.scss'],
    standalone: true,
    imports: [PopoverDirective, MatButton],
})

export class PopoverDemoComponent {

    public content: string = 'This is a demo of the popover component';

}
