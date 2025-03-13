import { ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PopoverPosition } from '../../model';
import { PopoverComponent } from './popover.component';

@Directive({
    selector: '[libPopover]',
})
export class PopoverDirective {

    @Input()
    public content: string;

    @Input()
    public set libPopover(value: string) {
        this.content = value;
        this.componentRef && (this.componentRef.instance.content = this.content);
    }

    @Input()
    public position: PopoverPosition = 'top';

    private componentRef: ComponentRef<PopoverComponent>;

    public constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<Element>,
    ) { }

    public ngOnInit(): void {
        const embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
        embeddedViewRef.rootNodes.forEach(node => {
            fromEvent(node, 'mouseenter').subscribe(() => {
                this.componentRef = this.viewContainerRef.createComponent(PopoverComponent);
                this.componentRef.instance.content = this.content;
                console.log(this.position);
            });
            fromEvent(node, 'mouseleave').subscribe(() => {
                const element = this.componentRef?.location?.nativeElement;
                this.componentRef?.destroy();
                element?.remove();
            });
        });

    }
}
