import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'style-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
    animations: [
        trigger('animation', [
            state('void', style({
                transform: 'scale(0.7)',
                opacity: 0,
            })),
            state('visible', style({
                transform: 'none',
                opacity: 1,
            })),
            transition('* => *', animate('{{transitionParams}}')),
        ]),
    ],
})
export class PositionComponent {
    public container: HTMLDivElement | null = null;

    public onAnimationStart(event: AnimationEvent): void {
        // switch (event.toState) {
        //     case 'visible':
        //         this.container = event.element as HTMLDivElement;
        //         this.container.style.top = `${(document.body.clientHeight - this.container.clientHeight) / 4}px`;
        //         this.container.style.left = `${(document.body.clientWidth - this.container.clientWidth) / 4}px`;
        //         this.moveOnTop();
        //         this.bindGlobalListeners();
        //         DomHandler.addClass(document.body, 'ui-overflow-hidden');
        //         break;
        //     case 'void':
        //         this.onContainerDestroy();
        //         this.onHide.emit({});
        //         break;
        //     default:
        //         return;
        // }
    }
}
