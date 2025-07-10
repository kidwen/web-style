import { enableProdMode, importProvidersFrom } from '@angular/core';

import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { withRouterConfig, provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { TankModule } from './app/tank/tank.module';
import { HomeModule } from './modules/home.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
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
}).catch(err => console.error(err));
