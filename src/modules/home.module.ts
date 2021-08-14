import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AnimateComponent } from './animate/animate.component';
import { CenterComponent } from './center/center.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { directives } from './directives';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MatTabsModule,
    ],
    declarations: [
        AnimateComponent,
        CenterComponent,
        CssStyleComponent,
        HomeComponent,
        PositionComponent,
        RxjsComponent,
        ...directives,
    ],
})

export class HomeModule { }
