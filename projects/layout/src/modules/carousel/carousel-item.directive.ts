import { FocusableOption } from "@angular/cdk/a11y";
import { Directive, HostBinding, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[carousel-item]',
    standalone: true,
})
export class CarouselItem implements FocusableOption {
    public readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

    @HostBinding('attr.role')
    public readonly role: string = 'listitem';

    @HostBinding('tabindex')
    public tabindex: number = -1;
    public focus(): void {
        this.element.nativeElement.focus({ preventScroll: true });
    }
}
