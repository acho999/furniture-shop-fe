import {Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Customer } from '../../models/customer.model';
import { Admin } from '../../models/admin.model';
import {admin} from '../../database';
import {customer} from '../../database';

@Injectable({providedIn:'root'})
export class UsersService {

    constructor(private http: HttpClient){}

    public createCustomer(form: NgForm):Customer{

       let cust:Customer = new Customer();
        cust.setFirstName = form.value['firstName'];
        cust.setLastName = form.value['lastName'];
        cust.setUserName = form.value['username'];
        cust.setPassword = form.value['password'];
        cust.setEmail = form.value['email'];
        
        if (this.saveUser(cust)) {
            return cust;
        }
        return null;
        
    }

    public createAdmin(form: NgForm):Admin{
        let admin:Admin = new Admin();
        admin.setFirstName = form.value['firstName'];
        admin.setLastName = form.value['lastName'];
        admin.setUserName = form.value['username'];
        admin.setPassword = form.value['password'];
        admin.setEmail = form.value['email'];
        admin.setIsAdmin = form.value['adminReg'];
        admin.setSecreKey = form.value['secret'];
        if (this.saveUser(admin)) {
            return admin;
        }
        return null;
        
    }

    public saveUser(user: User):boolean{
        /*this.http.post("http://localhost:8011/users-service/users/create",JSON.stringify(user)).subscribe(
        (data)=>{
            if (data) {
                return true;
            }
        },
        (error)=>{
            console.log(error);
            return false;
        });*/
        let adminUser = <Admin>user;
        let customerUser = <Customer>user;

        if (adminUser.getIsAdmin) {
            
           let containsUsername =  admin.filter(x=>((<Admin>x).getUserName === adminUser.getUserName));
           let containsEmail = admin.filter(x=>((<Admin>x).getEmail === adminUser.getEmail));

           if (containsEmail.length !== 0) {
            throw new Error("Мейлът вече се използва!");
           } else if(containsUsername.length !== 0){
            throw new Error("Потребителското име вече се използва!"); 
           } else {
                admin.push(<Admin>user);
                return true;
           }

        } else {
            
            let containsUsername =  customer.filter(x=>((<Customer>x).getUserName === adminUser.getUserName));
           let containsEmail = customer.filter(x=>((<Customer>x).getEmail === adminUser.getEmail));

           if (containsEmail.length !== 0) {
            throw new Error("Мейлът вече се използва!");
           } else if(containsUsername.length !== 0){
            throw new Error("Потребителското име вече се използва!"); 
           } else {
                customer.push(<Customer>user);
                return true;
           }

        }

    }

    public login(form: NgForm):Admin|Customer{

        let users = [...admin,...customer];
        let user = users.filter(x=>x.getUserName === form.value['username']);
        if (user.length === 1) {

            if(user[0].getPassword === form.value['password']){
                return user[0];
            } else {
                throw new Error("Грешена парола!");
            }
            
        } else {
            throw new Error("Грешно потребителско име!");
        }



    }

}