import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuNavComponent } from './menu-nav.component';

@NgModule({
    imports: [
        MatListModule,
        RouterModule,
        CommonModule,
    ],
    exports: [MenuNavComponent],
    declarations: [MenuNavComponent],
    providers: [],
})
export class MenuNavModule { }
