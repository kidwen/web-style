import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsDomComponent } from './tank/component/ts-dom/ts-dom.component';
import { RoutTestComponent } from './tank/component/rout-test/rout-test.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    TsDomComponent,
    AppComponent,
    RoutTestComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
