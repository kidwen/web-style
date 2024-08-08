import { FocusableOption } from "@angular/cdk/a11y";
import { Directive, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[carousel-item]',
})
export class CarouselItem implements FocusableOption {
    @HostBinding('attr.role')
    public readonly role: string = 'listitem';

    @HostBinding('tabindex')
    public tabindex: number = -1;

    public constructor(
        public readonly element: ElementRef<HTMLElement>,
    ) { }
    public focus(): void {
        this.element.nativeElement.focus({ preventScroll: true });
    }
}
