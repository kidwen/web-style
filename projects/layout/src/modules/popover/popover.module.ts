import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        PopoverComponent,
        PopoverDirective,
    ],
    declarations: [
        PopoverComponent,
        PopoverDirective,
    ],
    providers: [],
})
export class PopoverModule { }
