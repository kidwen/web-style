import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { GridSelectComponent } from './ant-demo/grid-select/grid-select.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { directives } from './directives';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    imports: [
        ButtonModule,
        CommonModule,
        HomeRoutingModule,
        MenuModule,
        FormsModule,
        NzGridModule,
        NzSelectModule,
    ],
    declarations: [
        HomeComponent,
        RxjsComponent,
        PositionComponent,
        CssStyleComponent,
        GridSelectComponent,
        ...directives,
    ],
})

export class HomeModule { }
