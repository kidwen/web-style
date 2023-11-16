import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-carousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CarouselComponent {

}
