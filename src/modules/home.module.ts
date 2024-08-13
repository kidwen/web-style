import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TableModule } from '@kidwen/layout';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { AnimateComponent } from './animate/animate.component';
import { CenterComponent } from './center/center.component';
import { ChildComponent } from './chang-detection/child/child.component';
import { ParentComponent } from './chang-detection/parent/parent.component';
import { CssStyleComponent } from './css-style/css-style.component';
import { directives } from './directives';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TableDemoComponent } from './table/table-demo.component';
import { CompleteComponent } from './dynamic-component/complete/complete.component';
import { NgComponentOutletCompleteExampleComponent } from './dynamic-component/ng-component-outlet-complete-example/ng-component-outlet-complete-example.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MatTabsModule,
        TableModule,
        MatButtonModule,
        HighlightAuto,
        HighlightLineNumbers,
    ],
    declarations: [
        AnimateComponent,
        CenterComponent,
        CssStyleComponent,
        HomeComponent,
        PositionComponent,
        RxjsComponent,
        TableDemoComponent,
        ParentComponent,
        ChildComponent,
        CompleteComponent,
        NgComponentOutletCompleteExampleComponent,
        TemplateVariablesComponent,
        ...directives,
    ],
})
export class HomeModule { }
