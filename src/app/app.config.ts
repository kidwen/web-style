import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { withRouterConfig, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeModule } from '../modules/home.module';
import { TankModule } from './tank/tank.module';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule, TankModule, HomeModule),
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        }),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(
            [],
            withRouterConfig({ canceledNavigationResolution: 'computed' }),
        ),
        provideAnimations(),
    ],
};
