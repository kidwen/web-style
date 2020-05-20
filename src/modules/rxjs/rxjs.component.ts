import { Component, OnDestroy } from '@angular/core';
import { asyncScheduler, Subscription } from 'rxjs';

@Component({
    selector: 'style-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnDestroy {
    public divContent?: string;
    public sub?: Subscription;

    public getI(): void {
        console.clear();
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = asyncScheduler.schedule(task, 100, 0);
    }

    public ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

}

function task(this: any, state: any): void {
    console.info(state);
    // tslint:disable-next-line: no-unsafe-any
    this.schedule((state as number) + 1, 1000); // `this` references currently executing Action, which we reschedule with new state and delay
}
