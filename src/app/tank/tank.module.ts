import { TankRoutingModule } from './tank-routing.module';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        TankRoutingModule,
    ],
    declarations: [
        MainComponent,
        NotFoundComponent,
    ],
    exports: [],
})

export class TankModule { }
