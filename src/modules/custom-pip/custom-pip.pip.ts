import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, inject } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

type Subscribable<T> = Observable<T> | Subject<T> | BehaviorSubject<T> | ReplaySubject<T>;

@Pipe({
    name: 'subscribe',
    standalone: true,
    pure: false,
})

export class SubscribePipe<T> implements PipeTransform, OnDestroy {

    private latestValue: T | null = null;

    private currentObs: Subscribable<T> | null = null;

    private sub: Subscription | null = null;

    private cdr = inject(ChangeDetectorRef);

    public transform(obs: Subscribable<T> | null | undefined): null | T {
        if (!obs) {
            this.dispose();
            return null;
        }

        if (obs === this.currentObs) {
            return this.latestValue;
        } else {
            this.dispose();
            this.subscribe(obs);
        }

        return this.latestValue;

    }

    public ngOnDestroy(): void {
        this.dispose();
        this.cdr = null;
        this.currentObs = null;
    }

    private subscribe(obs: Subscribable<T>): void {
        this.currentObs = obs;
        this.sub = obs.subscribe({
            next: (res: T) => {
                this.latestValue = res;
                this.cdr.markForCheck();
            },
            error: (err: unknown) => {
                throw err;
            },
        });
    }

    private dispose(): void {
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        }
    }
}
