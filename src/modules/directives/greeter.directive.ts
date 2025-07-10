import { Directive } from '@angular/core';

@Directive({
    selector: '[greeter]',
    standalone: true,
})
export class GreeterDirective {
    public suffix: string = '!';
}
