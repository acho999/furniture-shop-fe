import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerProfileComponent } from './customer.profile/customer.profile.component';
import { CustomerRoutingModule } from './customer.routing.module';

@NgModule({
    declarations:[CustomerProfileComponent],
    imports:[FormsModule,CustomerRoutingModule],
    providers:[],
    bootstrap:[],
    entryComponents:[],
    exports:[]
})
export class CustomerModule{}