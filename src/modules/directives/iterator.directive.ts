/* eslint-disable max-classes-per-file */
import { Directive, DoCheck, Input, IterableChangeRecord, IterableChanges, IterableDiffer, NgIterable, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
    selector: '[styleForOf]',
})
export class IteratorDirective<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {
    @Input('styleForOf')
    public dataSource: Array<any> = new Array<any>();

    private differ: IterableDiffer<T> | null = null;

    public constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>,
    ) {
        return;
    }

    public ngDoCheck(): void {
        if (this.differ) {
            const change: IterableChanges<T> | null = this.differ.diff(this.dataSource);
            if (change) {
                this.updateContext(change);
            }
        }
    }

    private updateContext(changes: IterableChanges<T>): void {
        const insertTuples: Array<IteratorContext<T, U>> = [];
        changes.forEachOperation(
            (item: IterableChangeRecord<any>, adjustedPreviousIndex: number | null, currentIndex: number | null) => {
                if (item.previousIndex === null) {
                    this.container.createEmbeddedView(
                        this.template, new IteratorContext<T, U>(null!, 0),
                        currentIndex === null ? undefined : currentIndex);
                    const tuple: IteratorContext<T, U> = new IteratorContext<T, U>(item, 0);
                    insertTuples.push(tuple);
                } else if (currentIndex === null) {
                    this.container.remove(
                        adjustedPreviousIndex === null ? undefined : adjustedPreviousIndex);
                } else if (adjustedPreviousIndex !== null) {
                    const view: ViewRef = this.container.get(adjustedPreviousIndex)!;
                    this.container.move(view, currentIndex);
                    const tuple: IteratorContext<unknown, NgIterable<unknown>> = new IteratorContext(item, adjustedPreviousIndex);
                    insertTuples.push(tuple);
                }
            });
    }
}

// eslint-disable-next-line max-classes-per-file
class IteratorContext<T, U extends NgIterable<T>> {
    public odd?: boolean;

    public even?: boolean;

    public first?: boolean;

    public constructor(
        public $implicit: any,
        public index: number,
    ) {
        this.odd = index % 2 === 1;
        this.even = !this.odd;
        this.first = index == 0;
    }
}
