import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MenuNavModule } from '@kidwen/layout';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { TankRoutingModule } from './tank-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        TankRoutingModule,
        MatListModule,
        FormsModule,
        CommonModule,
        MenuNavModule,
        MatSidenavModule,
    ],
    declarations: [
        MainComponent,
        NotFoundComponent,
    ],
    exports: [],
})

export class TankModule { }
