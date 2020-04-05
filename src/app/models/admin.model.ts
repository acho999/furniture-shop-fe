import { IsLength, IsEmail, NotEmpty} from "validator.ts/decorator/Validation";
import {User} from './user.model'

export class Admin extends User{

    protected username: string;

    protected firstName: string;

    protected lastName :string;

    protected password :string;

    protected email :string;

    protected secreKey: string;

    protected isAdmin: boolean;

    get getIsAdmin():boolean{
        return this.isAdmin;
    }
     
    set setIsAdmin(isAdmin: boolean){
        this.isAdmin = isAdmin;
    }

    get getSecretKey():string{
        return this.secreKey;
    }
     
    set setSecreKey(secreKey: string){
        this.secreKey = secreKey;
    }

    get getUserName():string{
        return this.username;
    }
     
    set setUserName(username: string){
        this.username = username;
    }

    get getFirstName():string{
        return this.firstName;
    }
     
    set setFirstName(firstName: string){
        this.firstName = firstName;
    }

    get getLastName():string{
        return this.lastName;
    }
     
    set setLastName(lastName: string){
        this.lastName = lastName;
    }

    get getPassword():string{
        return this.password;
    }
     
    set setPassword(password: string){
        this.password = password;
    }

    get getEmail():string{
        return this.email;
    }
     
    set setEmail(email: string){
        this.email = email;
    }
}