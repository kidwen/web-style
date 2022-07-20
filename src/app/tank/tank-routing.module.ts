import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const lazyModules: Routes = [{
    path: '',
    loadChildren: async () => {
        return import('src/modules/home.module').then(m => {
            return m.HomeModule as any;
        });
    },
}];

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    children: [
        {
            path: '',
            redirectTo: 'docs',
            pathMatch: 'full',
        },
    ],
}, {
    path: 'demos',
    component: MainComponent,
    children: [
        {
            path: '',
            redirectTo: 'intro',
            pathMatch: 'full',
        },
        {
            path: 'intro',
            component: IntroComponent,
        },
        ...lazyModules, {
            path: '404',
            component: NotFoundComponent,
        },
    ],
}, {
    path: '404',
    pathMatch: 'full',
    component: NotFoundComponent,
}, {
    path: '**',
    redirectTo: '404',
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TankRoutingModule { }
