import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { default as zh } from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterModule, LayoutModule, MenuNavModule, NavbarModule } from '@kidwen/layout';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { HomeModule } from '../modules/home.module';
import { AppComponent } from './app.component';
import { TankModule } from './tank/tank.module';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot([], { canceledNavigationResolution: 'computed' }),
        BrowserModule,
        BrowserAnimationsModule,
        TankModule,
        HomeModule,
        FooterModule,
        LayoutModule,
        NavbarModule,
        MenuNavModule,
    ],
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        }),
        provideHttpClient(withInterceptorsFromDi()),
    ],
})

export class AppModule { }
