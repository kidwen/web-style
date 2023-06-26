import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const components = ['animate', 'center', 'css', 'position', 'rxjs', 'shadow'];
@Component({
    selector: 'style-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WelcomeComponent implements OnInit {
    public components: Array<{ name: string; originValue: string }> = new Array<{ name: string; originValue: string }>();

    public ngOnInit(): void {
        this.components = components.map(com => ({ name: `${com[0].toUpperCase()}${com.slice(1)}`, originValue: com }));
    }
}
