import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PositionComponent } from './position/position.component';

@NgModule({
    imports: [
        ButtonModule,
        HomeRoutingModule,
        MenuModule,
    ],
    declarations: [
        HomeComponent,
        RxjsComponent,
        PositionComponent,
    ]
})

export class HomeModule { }
