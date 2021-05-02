import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { MenuNavModule } from '../menu-nav/menu-nav.module';

@NgModule({
    imports: [RouterModule, MenuNavModule],
    declarations: [SidenavComponent],
    exports: [SidenavComponent],
    providers: [],
})
export class SidenavModule { }
