import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const components = [
    {
        name: 'animate',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/datepicker.scene.png',
    },
    {
        name: 'center',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/input.scene.png',
    },
    {
        name: 'css',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/slide-toggle.scene.png',
    },
    {
        name: 'position',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/slider.scene.png',
    },
    {
        name: 'rxjs',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/slider.scene.png',
    },
    {
        name: 'shadow',
        imgUrl: 'https://v16.material.angular.io/assets/screenshots/slider.scene.png',
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
