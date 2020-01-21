import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';

const lazyModules: Routes = [{
    path: '',
    loadChildren: 'src/modules/home.module#HomeModule',
}];

const routes: Routes = [{
    path: '',
    component: MainComponent,
    children: [{
        path: '', redirectTo: 'home', pathMatch: 'full',
    },
    ...lazyModules, {
        path: '404',
        component: NotFoundComponent,
    }],
}, {
    path: '**',
    redirectTo: '404',
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TankRoutingModule { }
