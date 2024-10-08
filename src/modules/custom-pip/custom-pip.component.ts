import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, interval, of, tap } from 'rxjs';
import { SubscribePipe } from './custom-pip.pip';

@Component({
    standalone: true,
    imports: [CommonModule, SubscribePipe],
    selector: 'app-custom-pip',
    templateUrl: './custom-pip.component.html',
    styleUrls: ['./custom-pip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CustomPipComponent implements OnInit {

    public show: boolean = true;

    public obs$: Observable<number> = interval(500).pipe(
        tap(x => {
            if (x === 10) {
                this.show = false;
            }
        }),
    );

    public ngOnInit(): void {
        setTimeout(() => {
            this.obs$ = of(20000);
        }, 10000);

        setTimeout(() => {
            this.obs$ = null;
        }, 10000);
    }

}
