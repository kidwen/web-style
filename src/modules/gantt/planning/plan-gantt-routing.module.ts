import { Routes, RouterModule } from '@angular/router';
import { PlanGanttComponent } from './components/plan-gantt/plan-gantt.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PlanGanttComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PlanGanttRoutingModule { }
