import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { login_reg_animations ,message} from '../../animations';
import { UsersService } from '../../core.module/services/users.service';
import { User } from '../../models/user.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector:'registration-component',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    animations:[
        login_reg_animations,
        message
    ]
})
export class RegistrationComponent implements OnInit{
    @ViewChild('adminForm',{static:false}) signUpForm: NgForm;
    adminRegistration:boolean;
    showForm:boolean = true;
    showAfterRegMessage:boolean;
    usedUsername:string;
    usedEmail:string;

    constructor(private router: Router,private usersService: UsersService,private spinner: NgxSpinnerService){}

    ngOnInit(): void {
    }
    onDestroy(){
    }

    onSubmit(form: NgForm){

        let createAdmin: User;
        let createCustomer: User;
        this.spinner.show();
        if(this.adminRegistration){
            let adminPromise = new Promise((resolve,reject)=>{
                
                createAdmin = this.usersService.createAdmin(form);
                resolve(createAdmin);
            })
            setTimeout(() => {
                
            adminPromise.then((x)=>{
                if (x) {
                    this.spinner.hide();
                    this.showForm = false;
                    this.showAfterRegMessage = true;
                    setTimeout(() => {
                        this.onSuccesReg();
                    }, 2000);
                   
                
                    return;
                }
            }).catch((error)=>{
                this.spinner.hide();
                if (error['message'] === "Мейлът вече се използва!") {
                    this.usedEmail = error['message'];
                } else if(error['message'] === "Потребителското име вече се използва!"){
                    this.usedUsername = error['message'];
                }
            });
        }, 500);
            
        } else {
            let customerPromise = new Promise((resolve,reject)=>{
               
                    createCustomer = this.usersService.createCustomer(form);
                    resolve(createCustomer);
               
            })

            setTimeout(() => {
                
            customerPromise.then((x)=>{
                if (x) {
                    this.spinner.hide();
                    this.showForm = false;
                    this.showAfterRegMessage = true;
                    setTimeout(() => {
                        this.onSuccesReg();
                    }, 2000);
                    return;
                }
            }).catch((error)=>{
                this.spinner.hide();
                if (error['message'] === "Мейлът вече се използва!") {
                    this.usedEmail = error['message'];
                } else if(error['message'] === "Потребителското име вече се използва!"){
                    this.usedUsername = error['message'];
                }
                
            });
        }, 500);
        }
        this.usedEmail = null;
        this.usedUsername = null;
    }

    onAdminReg(event: Event){
        this.adminRegistration = (<HTMLInputElement>event.target).value === 'true'?true:false;
        
    }
    onHide(){
        this.adminRegistration = !this.adminRegistration;
    }

    onSuccesReg(){
        this.router.navigate(['/login']);
    }

    onClose(event: Event){
        event.preventDefault();
        this.showForm = false;
        this.router.navigate(['/']);
    }
}