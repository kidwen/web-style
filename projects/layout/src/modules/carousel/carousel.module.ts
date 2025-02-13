import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel.component';
import { CarouselItem } from './carousel-item.directive';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule,
    ],
    exports: [
        CarouselComponent,
        CarouselItem,
    ],
    declarations: [
        CarouselComponent,
        CarouselItem,
    ],
})
export class CarouselModule { }
