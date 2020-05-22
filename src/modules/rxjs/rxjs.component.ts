import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animationFrameScheduler, asyncScheduler, SchedulerAction, Subscription } from 'rxjs';

let div: HTMLDivElement | null = null;
@Component({
    selector: 'style-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
    public divContent?: string;
    public sub$?: Subscription;
    public animal$?: Subscription;
    @ViewChild('animal', { static: true })
    public animalDiv?: ElementRef;

    public ngOnInit(): void {
        if (this.animalDiv) {
            div = this.animalDiv.nativeElement as HTMLDivElement;
        }
        this.animal$ = animationFrameScheduler.schedule(addHeight, 0, 0);
    }

    public getI(): void {
        console.clear();
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
        this.sub$ = asyncScheduler.schedule(task, 100, 0);
    }

    public ngOnDestroy(): void {
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
        if (this.animal$) {
            this.animal$.unsubscribe();
        }
    }

}

function task(this: SchedulerAction<number>, state: any): void {
    console.info(state);
    this.schedule((state as number) + 1, 1000); // `this` references currently executing Action, which we reschedule with new state and delay
}

function addHeight(this: SchedulerAction<number>, height: any): void {
    if (div) {
        div.style.height = `${height}px`;
        this.schedule((height as number) + 0.1);
    }
}
