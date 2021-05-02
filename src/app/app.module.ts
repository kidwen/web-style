import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { default as zh } from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule, MenuNavModule, NavbarModule } from '@kidwen/layout';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { HomeModule } from '../modules/home.module';
import { AppComponent } from './app.component';
import { TankModule } from './tank/tank.module';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        TankModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        LayoutModule,
        NavbarModule,
        MenuNavModule,
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})

export class AppModule { }
