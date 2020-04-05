
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../core.module/services/users.service';

@Component({
    selector:'nav-component',
    templateUrl:'./nav.component.html',
    styleUrls:['./nav.component.css']

})
export class NavComponent{

    constructor(private router: Router,private usersService: UsersService){}

    isAdmin:boolean = true;//идеята е да се вижда като се логне админ-а

   
}