import { Component, OnInit } from '@angular/core';

const components = ['animate', 'center', 'css', 'position', 'rxjs', 'shadow'];
@Component({
    selector: 'style-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})

export class WelcomeComponent implements OnInit {
    public components: Array<{ name: string; originValue: string }> = new Array<{ name: string; originValue: string }>();

    public ngOnInit() {
        this.components = components.map(com => {
            return { name: `${com[0].toUpperCase()}${com.slice(1)}`, originValue: com };
        });
    }
}
