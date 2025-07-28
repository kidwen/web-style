import { ComponentRef, Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PopoverPosition } from '../../model';
import { PopoverComponent } from './popover.component';

@Directive({
    selector: '[libPopover]',
    standalone: true,
})
export class PopoverDirective {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<Element>>(TemplateRef);


    @Input()
    public content: string;

    @Input()
    public set libPopover(value: string) {
        this.content = value;
        this.componentRef && (this.componentRef.instance.content = this.content);
    }

    @Input()
    public libPopoverPosition: PopoverPosition = 'top';

    private componentRef: ComponentRef<PopoverComponent>;

    public ngOnInit(): void {
        const embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
        embeddedViewRef.rootNodes.forEach(node => {
            fromEvent(node, 'mouseenter').subscribe(() => {
                this.componentRef = this.viewContainerRef.createComponent(PopoverComponent);
                this.componentRef.instance.content = this.content;
                console.log(this.libPopoverPosition);
            });
            fromEvent(node, 'mouseleave').subscribe(() => {
                const element = this.componentRef?.location?.nativeElement;
                this.componentRef?.destroy();
                element?.remove();
            });
        });

    }
}
