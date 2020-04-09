import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TankModule } from './tank/tank.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        TankModule,
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
