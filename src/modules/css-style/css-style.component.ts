import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'style-css-style',
    templateUrl: './css-style.component.html',
    styleUrls: ['./css-style.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssStyleComponent { }
