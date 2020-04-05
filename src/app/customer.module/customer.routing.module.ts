import { Routes, RouterModule } from "@angular/router";
import { CustomerProfileComponent } from './customer.profile/customer.profile.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
{path:"customerProfile",component:CustomerProfileComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class CustomerRoutingModule{

}