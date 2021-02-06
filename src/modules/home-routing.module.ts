import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { GridSelectComponent } from './ant-demo/grid-select/grid-select.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'position', component: PositionComponent },
    { path: 'css', component: CssStyleComponent },
    { path: 'animate', component: AnimateComponent },
    { path: 'ant', component: GridSelectComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
