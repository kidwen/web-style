import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyModules: Routes = [{
    path: '',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loadChildren: async () => import('src/modules/home.module').then(m => m.HomeModule as any),
}];

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/welcome/welcome.component').then(m => m.WelcomeComponent),
        children: [
            {
                path: '',
                redirectTo: 'docs',
                pathMatch: 'full',
            },
        ],
    }, {
        path: 'demos',
        loadComponent: () => import('./components/main/main.component').then(m => m.MainComponent),
        children: [
            {
                path: '',
                redirectTo: 'intro',
                pathMatch: 'full',
            },
            {
                path: 'intro',
                loadComponent: () => import('./components/intro/intro.component').then(m => m.IntroComponent),
            },
            ...lazyModules,
            {
                path: '404',
                loadComponent: () => import('./components/not-found/not-fount.component').then(m => m.NotFoundComponent),
            },
        ],
    }, {
        path: '404',
        pathMatch: 'full',
        loadComponent: () => import('./components/not-found/not-fount.component').then(m => m.NotFoundComponent),
    }, {
        path: '**',
        redirectTo: '404',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TankRoutingModule { }
