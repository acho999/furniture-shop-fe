import { Component } from '@angular/core';
import { UsersService } from 'src/app/core.module/services/users.service';

@Component({
    selector:'customer-profile',
    templateUrl:'./customer.profile.component.html',
    styleUrls:['./customer.profile.component.css']
})
export class CustomerProfileComponent{
 
    constructor(private userService: UsersService){

    }

}