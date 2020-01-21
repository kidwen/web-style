import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    HomeRoutingModule,
    MenuModule,
  ],
  declarations: [
    HomeComponent,
    RxjsComponent,
  ]
})

export class HomeModule { }
