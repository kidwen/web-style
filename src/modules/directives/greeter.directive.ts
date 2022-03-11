import { Directive } from '@angular/core';

@Directive({ selector: '[greeter]' })
export class GreeterDirective {
    public suffix: string = '!';
}
