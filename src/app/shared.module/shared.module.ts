import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LoginComponent } from './login.component/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './register.component/register.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavComponent } from './navigation.component/nav.component';
import { HomeComponent } from './home.component/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule}  from '@angular/router'
import { ProductsModule } from '../products.module/products.module';


@NgModule({
    declarations:[LoginComponent,RegistrationComponent,NavComponent,HomeComponent],
    imports:[FormsModule,CommonModule,NgxSpinnerModule,BrowserAnimationsModule,RouterModule,ProductsModule],
    exports:[RegistrationComponent,LoginComponent,NavComponent,HomeComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule{

}