import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animationFrameScheduler, asyncScheduler, ReplaySubject, SchedulerAction, Subject, Subscription, takeUntil } from 'rxjs';
import { code } from './rxjs.code';

let div: HTMLDivElement | null = null;

@Component({
    selector: 'style-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent implements OnInit, OnDestroy {
    @ViewChild('animal', { static: true })
    public animalDiv?: ElementRef; public divContent?: string;

    public code = code;

    public sub1: Array<string> = new Array<string>();

    public sub2: Array<string> = new Array<string>();

    public sub$?: Subscription;

    public animal$?: Subscription;

    public data$: ReplaySubject<string> = new ReplaySubject<string>(2);

    public onDestroy$ = new Subject<void>();

    public ngOnInit(): void {
        if (this.animalDiv) {
            div = this.animalDiv.nativeElement as HTMLDivElement;
        }
        this.animal$ = animationFrameScheduler.schedule(addHeight, 0, 0);

        this.data$.next('data 1');
        this.data$.next('data 2');
        this.data$.next('data 3');

        this.data$.pipe(takeUntil(this.onDestroy$)).subscribe({
            next: data => {
                this.sub1.push(`Subscribe 1: ${data}`);
            },
        });

        this.data$.pipe(takeUntil(this.onDestroy$)).subscribe({
            next: data => {
                this.sub2.push(`Subscribe 2: ${data}`);
            },
        });

        const subject = new ReplaySubject(3);

        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.next(4);
        subject.subscribe(value => console.log(`Received by Subscriber 1: ${ value }`));
        subject.next(5);
        subject.subscribe(value => console.log(`Received by Subscriber 2: ${ value }`));
        subject.next(6);
        subject.subscribe(value => console.log(`Received by Subscriber 3: ${ value }`));
        subject.next(7);
    }

    public getI(): void {
        console.clear();
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
        this.sub$ = asyncScheduler.schedule(task, 100, 0);
    }

    public ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
        if (this.animal$) {
            this.animal$.unsubscribe();
        }
    }

}

function task(this: SchedulerAction<number>, state: number): void {
    // eslint-disable-next-line no-invalid-this
    this.schedule(state + 1, 1000); // `this` references currently executing Action, which we reschedule with new state and delay
}

function addHeight(this: SchedulerAction<number>, height: number): void {
    if (height > 300) {
        return;
    }
    if (div) {
        div.style.height = `${height}px`;
        // eslint-disable-next-line no-invalid-this
        this.schedule(height + 0.1);
    }
}
