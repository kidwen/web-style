import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
    @Input()
    public carousels: Array<any> = new Array<any>();
}
