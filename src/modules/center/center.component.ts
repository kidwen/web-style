import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { absoluteCode, absoluteMarginAutoCode, flexCode, tableCode } from './center.code';

@Component({
    selector: 'app-center',
    templateUrl: './center.component.html',
    styleUrls: ['./center.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatTabGroup,
        MatTab,
        HighlightAuto,
        HighlightLineNumbers,
    ],
})

export class CenterComponent {

    public flexCode: string = flexCode;

    public tableCode: string = tableCode;

    public absoluteCode: string = absoluteCode;

    public absoluteMarginAutoCode: string = absoluteMarginAutoCode;
}
