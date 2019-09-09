import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsDomComponent } from './tank/component/ts-dom/ts-dom.component';
import { RoutTestComponent } from './tank/component/rout-test/rout-test.component';


const routes: Routes = [{
  path: '',
  component: TsDomComponent,
}, {
  path: 'ts-dom',
  component: TsDomComponent,
}, {
  path: 'route',
  component: RoutTestComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
