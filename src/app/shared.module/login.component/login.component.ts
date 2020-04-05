import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login_reg_animations } from '../../animations';
import { UsersService } from '../../core.module/services/users.service';
import { NgForm } from '@angular/forms';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
    animations:[
        login_reg_animations
    ]
})
export class LoginComponent{

    showUsernameErorr: string;

    showPasswordErorr: string;

    show:boolean = true;

    constructor(private router: Router,private usersService: UsersService){}

    onClose(event: Event){
        event.preventDefault();
        this.show = false;
        this.router.navigate(['/']);
    }

    onSubmit(form: NgForm){

        this.showPasswordErorr = null;
        this.showUsernameErorr = null;

        let login = new Promise((resolve,reject)=>{

            let result = this.usersService.login(form);
            
            if (result) {
                resolve(result);
            }
            
        });
        login.then((x)=>{
            console.log(x);
            this.router.navigate(['/']);
        }).catch(error => {

            if(error['message'] === 'Грешена парола!'){
                this.showPasswordErorr = error['message'];
            } else if(error['message'] === 'Грешно потребителско име!') {
                this.showUsernameErorr = error['message'];
            }
            
        });
        
    }


}