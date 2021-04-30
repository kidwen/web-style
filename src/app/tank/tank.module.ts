import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './components/main/main.component';
import { StyleMenuNavComponent } from './components/menu-nav/menu-nav.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { TankRoutingModule } from './tank-routing.module';

@NgModule({
    imports: [
        TankRoutingModule,
        MatListModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        MainComponent,
        NotFoundComponent,
        StyleMenuNavComponent,
    ],
    exports: [StyleMenuNavComponent],
})

export class TankModule { }
