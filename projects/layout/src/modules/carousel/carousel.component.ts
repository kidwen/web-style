import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { CarouselItem } from './carousel-item.directive';

@Component({
    selector: 'lib-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CarouselComponent {

    @ContentChildren(CarouselItem)
    public items!: QueryList<CarouselItem>;

    @ViewChild('list')
    public list!: ElementRef<HTMLElement>;

    public showPrevArrow: boolean = false;

    public showNextArrow: boolean = true;

    private index: number = 0;

    private position: number = 0;

    public previous(): void {
        // eslint-disable-next-line no-plusplus
        for (let i = this.index; i > -1; i--) {
            if (this._isOutOfView(i)) {
                this.index = i;
                this._scrollToActiveItem();
                break;
            }
        }
    }

    public next(): void {
        // eslint-disable-next-line no-plusplus
        for (let i = this.index; i < this.items.length; i++) {
            if (this._isOutOfView(i)) {
                this.index = i;
                this._scrollToActiveItem();
                break;
            }
        }
    }

    private _isOutOfView(index: number, side?: 'start' | 'end'): boolean {
        const { offsetWidth, offsetLeft } = this.items.toArray()[index].element.nativeElement;

        if ((!side || side === 'start') && offsetLeft - this.position < 0) {
            return true;
        }

        return (
            (!side || side === 'end') &&
            offsetWidth + offsetLeft - this.position > this.list.nativeElement.clientWidth
        );
    }

    /** Scrolls an item into the viewport. */
    private _scrollToActiveItem(): void {
        if (!this._isOutOfView(this.index)) {
            return;
        }

        const itemsArray = this.items.toArray();
        let targetItemIndex = this.index;

        // Only shift the carousel by one if we're going forwards. This
        // looks better compared to moving the carousel by an entire page.
        if (this.index > 0 && !this._isOutOfView(this.index - 1)) {
            targetItemIndex = itemsArray.findIndex((_, i) => !this._isOutOfView(i)) + 1;
        }

        this.position = itemsArray[targetItemIndex].element.nativeElement.offsetLeft;
        this.list.nativeElement.style.transform = `translateX(-${this.position}px)`;
        this.showPrevArrow = this.index > 0;
        this.showNextArrow = false;

        // eslint-disable-next-line no-plusplus
        for (let i = itemsArray.length - 1; i > -1; i--) {
            if (this._isOutOfView(i, 'end')) {
                this.showNextArrow = true;
                break;
            }
        }
    }

}
