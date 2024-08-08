import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const components = [
    {
        name: 'animate',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/datepicker.scene.png',
    },
    {
        name: 'center',
        imgUrl: '',
    },
    {
        name: 'css',
        imgUrl: '',
    },
    {
        name: 'position',
        imgUrl: '',
    },
    {
        name: 'rxjs',
        imgUrl: '',
    },
    {
        name: 'shadow',
        imgUrl: '',
    }];

@Component({
    selector: 'style-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WelcomeComponent implements OnInit {
    public components: Array<{ name: string; originValue: string; imgUrl: string }> = new Array<{ name: string; originValue: string; imgUrl: string }>();

    public ngOnInit(): void {
        this.components = components.map(com => ({ ...com, name: `${com.name[0].toUpperCase()}${com.name.slice(1)}`, originValue: com.name }));
    }
}
