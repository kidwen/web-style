import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lib-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements OnInit {
    @Input()
    public carousels: Array<any> = new Array<any>();

    public ngOnInit() {
        this.carousels = [
            { href: '', src: '', name: 'Input' },
            { href: '', src: '', name: 'Input' },
            { href: '', src: '', name: 'Input' },
        ];
    }
}
