import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CarouselComponent {

}
