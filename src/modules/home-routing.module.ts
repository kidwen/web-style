import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { CenterComponent } from './center/center.component';
import { ParentComponent } from './chang-detection/parent/parent.component';
import { NgComponentOutletCompleteExampleComponent } from './dynamic-component/ng-component-outlet-complete-example/ng-component-outlet-complete-example.component';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TableDemoComponent } from './table/table-demo.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { AngularResolverParentComponent } from './angular-resolver/components/angular-resolver-parent/angular-resolver-parent.component';
import { AngularResolverService } from './angular-resolver/services/angular-resolver.service';
import {CustomPipComponent} from './custom-pip/custom-pip.component';

export const routes: Routes = [
    {
        path: 'animate',
        component: AnimateComponent,
        data: {
            title: 'Animate',
        },
    },
    {
        path: 'position',
        component: PositionComponent,
        data: {
            title: 'Position',
        },
    },
    {
        path: 'center',
        component: CenterComponent,
        data: {
            title: 'Center',
        },
    },
    {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
            title: 'Rxjs',
        },
    },
    {
        path: 'shadow',
        component: HomeComponent,
        data: {
            title: 'Shadow',
        },
    },
    {
        path: 'table',
        component: TableDemoComponent,
        data: {
            title: 'Table',
        },
    },
    {
        path: 'change-detection',
        component: ParentComponent,
        data: {
            title: 'ChangeDetection',
        },
    },
    {
        path: 'dynamic-component',
        component: NgComponentOutletCompleteExampleComponent,
        data: {
            title: 'Dynamic Component',
        },
    },
    {
        path: 'template-variables',
        component: TemplateVariablesComponent,
        data: {
            title: 'Template Variables',
        },
    },
    {
        path: 'angular-resolver',
        component: AngularResolverParentComponent,
        resolve: [AngularResolverService],
        data: {
            title: 'Angular Resolver',
        },
    },
    {
        path: 'custom-pipe',
        component: CustomPipComponent,
        resolve: [AngularResolverService],
        data: {
            title: 'Custom Pipe',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
