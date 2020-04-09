import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    imports: [
        ButtonModule,
        HomeRoutingModule,
        MenuModule,
        FormsModule,
    ],
    declarations: [
        HomeComponent,
        RxjsComponent,
        PositionComponent,
    ],
})

export class HomeModule { }
