import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { GreeterDirective } from 'src/modules/directives/greeter.directive';
import { NgComponentOutlet } from '@angular/common';
import { CompleteComponent } from '../complete/complete.component';

@Component({
    selector: 'style-ng-component-outlet-complete-example',
    templateUrl: './ng-component-outlet-complete-example.component.html',
    styleUrls: ['./ng-component-outlet-complete-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgComponentOutlet],
})

export class NgComponentOutletCompleteExampleComponent {
    public completeComponent = CompleteComponent;
    public myInjector: Injector;
    public myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];

    public constructor(private injector: Injector) {
        this.myInjector = Injector.create({ providers: [{ provide: GreeterDirective, deps: [] }], parent: this.injector });
    }
}
