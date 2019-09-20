import { TankRoutingModule } from './tank-routing.module';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { NgModule } from '@angular/core';
// import { PlanGanttComponent } from 'src/modules/gantt/planning/components/plan-gantt/plan-gantt.component';

@NgModule({
  imports: [
    TankRoutingModule,
  ],
  declarations: [
    MainComponent,
    NotFoundComponent,
    // PlanGanttComponent,
  ],
  exports: [],
})

export class TankModule { }
