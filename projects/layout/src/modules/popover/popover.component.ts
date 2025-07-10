import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
    standalone: true,
})

export class PopoverComponent {

    @Input()
    public content: string;
    @Input()
    public placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

}
