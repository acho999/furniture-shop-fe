import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin.panel/admin.panel.component';

const routes: Routes = [
{path:'adminPanel',component:AdminPanelComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{

}