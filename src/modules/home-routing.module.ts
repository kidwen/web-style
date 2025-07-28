import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularResolverService } from './angular-resolver/services/angular-resolver.service';

export const routes: Routes = [
    {
        path: 'animate',
        loadComponent: () => import('./animate/animate.component').then(m => m.AnimateComponent),
        data: {
            title: 'Animate',
        },
    },
    {
        path: 'position',
        loadComponent: () => import('./position/position.component').then(m => m.PositionComponent),
        data: {
            title: 'Position',
        },
    },
    {
        path: 'center',
        loadComponent: () => import('./center/center.component').then(m => m.CenterComponent),
        data: {
            title: 'Center',
        },
    },
    {
        path: 'rxjs',
        loadComponent: () => import('./rxjs/rxjs.component').then(m => m.RxjsComponent),
        data: {
            title: 'Rxjs',
        },
    },
    {
        path: 'shadow',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: {
            title: 'Shadow',
        },
    },
    {
        path: 'table',
        loadComponent: () => import('./table/table-demo.component').then(m => m.TableDemoComponent),
        data: {
            title: 'Table',
        },
    },
    {
        path: 'change-detection',
        loadComponent: () => import('./chang-detection/parent/parent.component').then(m => m.ParentComponent),
        data: {
            title: 'ChangeDetection',
        },
    },
    {
        path: 'dynamic-component',
        loadComponent: () => import('./dynamic-component/ng-component-outlet-complete-example/ng-component-outlet-complete-example.component').then(m => m.NgComponentOutletCompleteExampleComponent),
        data: {
            title: 'Dynamic Component',
        },
    },
    {
        path: 'template-variables',
        loadComponent: () => import('./template-variables/template-variables.component').then(m => m.TemplateVariablesComponent),
        data: {
            title: 'Template Variables',
        },
    },
    {
        path: 'angular-resolver',
        loadComponent: () => import('./angular-resolver/components/angular-resolver-parent/angular-resolver-parent.component').then(m => m.AngularResolverParentComponent),
        resolve: [AngularResolverService],
        data: {
            title: 'Angular Resolver',
        },
    },
    {
        path: 'custom-pipe',
        loadComponent: () => import('./custom-pip/custom-pip.component').then(m => m.CustomPipComponent),
        resolve: [AngularResolverService],
        data: {
            title: 'Custom Pipe',
        },
    },
    {
        path: 'accordion',
        loadComponent: () => import('./accordion/accordion.component').then(m => m.AccordionComponent),
        data: {
            title: 'Accordion',
        },
    },
    {
        path: 'popover-demo',
        loadComponent: () => import('./popover-demo/popover-demo.component').then(m => m.PopoverDemoComponent),
        data: {
            title: 'Popover Demo',
        },
    },
    {
        path: 'route',
        loadComponent: () => import('./route/route.component').then(m => m.RouteComponent),
        canActivate: [(): boolean => {
            console.log('Route activated');
            return true;
        }],
        data: {
            title: 'Route',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
