import { NgModule } from '@angular/core';
import { PlanGanttComponent } from './components/plan-gantt/plan-gantt.component';
import { PlanGanttRoutingModule } from './plan-gantt-routing.module';

@NgModule({
  imports: [
    PlanGanttRoutingModule,
  ],
  declarations: [
    PlanGanttComponent,
  ]
})
export class PlanGanttModule { }
