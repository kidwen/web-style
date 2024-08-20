import { ChangeDetectionStrategy, Component } from '@angular/core';
import { absoluteCode, absoluteMarginAutoCode, flexCode, tableCode } from './center.code';

@Component({
    selector: 'app-center',
    templateUrl: './center.component.html',
    styleUrls: ['./center.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CenterComponent {

    public flexCode: string = flexCode;

    public tableCode: string = tableCode;

    public absoluteCode: string = absoluteCode;

    public absoluteMarginAutoCode: string = absoluteMarginAutoCode;
}
