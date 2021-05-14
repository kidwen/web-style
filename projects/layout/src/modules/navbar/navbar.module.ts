import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        RouterModule,
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
})
export class NavbarModule { }
