import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'style-not-fount',
    templateUrl: './not-fount.component.html',
    styleUrls: ['./not-fount.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
    public countDown: number = 5;
    private intervalId?: number;

    public ngOnInit(): void {
        this.intervalId = window.setInterval(() => {
            if (this.countDown > 1) {
                this.countDown -= 1;
            } else {
                history.back();
                clearInterval(this.intervalId);
            }
        }, 1000);
    }

    public ngOnDestroy(): void {
        if (this.intervalId) {
            window.clearInterval(this.intervalId);
        }
    }
}
