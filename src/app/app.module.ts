import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { default as zh } from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterModule, LayoutModule, MenuNavModule, NavbarModule } from '@kidwen/layout';
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
        FooterModule,
        LayoutModule,
        NavbarModule,
        MenuNavModule,
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
