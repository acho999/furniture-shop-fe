import { IsLength, NotEmpty} from 'validator.ts/decorator/Validation';

export class UserLoginModel{

    @IsLength(2,20)
    @NotEmpty()
    private username: string;

    @IsLength(2,20)
    @NotEmpty()
    private password: string;

    private rememberMe: boolean;

    get getUserName():string{

        return this.username;
    }

    set setUserName(usrName: string){

        this.username = usrName;
    }

    get getRememberMe():boolean{

        return this.rememberMe;
    }

    set setRememberMe(rememberMe: boolean){

        this.rememberMe = rememberMe;
    }

    get getPassword():string{

        return this.password;
    }

    set setPassword(password: string){

        this.password = password;
    }

}