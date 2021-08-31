import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        CarouselComponent,
    ],
    declarations: [
        CarouselComponent,
    ],
})
export class CarouselModule { }
