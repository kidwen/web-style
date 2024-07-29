import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'

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
