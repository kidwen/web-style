import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'style-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {

    public ngOnInit(): void {
        return;
    }
}
