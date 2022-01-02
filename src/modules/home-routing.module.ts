import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { CenterComponent } from './center/center.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TableDemoComponent } from './table/table-demo.component';
import { ParentComponent } from './chang-detection/parent/parent.component';

const routes: Routes = [
    { path: 'animate', component: AnimateComponent },
    { path: 'position', component: PositionComponent },
    { path: 'center', component: CenterComponent },
    { path: 'css', component: CssStyleComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'shadow', component: HomeComponent },
    { path: 'table', component: TableDemoComponent },
    { path: 'change-detection', component: ParentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
