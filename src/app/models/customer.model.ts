import { IsLength, NotEmpty, IsEmail } from 'validator.ts/decorator/Validation';
import { User } from './user.model';


export class Customer extends User{

    @IsLength(2,50)
    @NotEmpty()
     protected username: string;
 
     @IsLength(2,50)
     @NotEmpty()
     protected firstName: string;
 
     @IsLength(2,50)
     @NotEmpty()
     protected lastName :string;
 
     @IsLength(6,12)
     @NotEmpty()
     protected password :string;
 
     @IsEmail()
     @NotEmpty()
     @IsLength(5,30)
     protected email :string;

 
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