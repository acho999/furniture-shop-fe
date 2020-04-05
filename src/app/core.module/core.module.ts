import { NgModule } from '@angular/core';
import {UsersService} from './services/users.service'
import {HttpClientModule} from '@angular/common/http'
import { ProductsService } from './services/products.service';
import { CategoryService } from './services/category.service';

@NgModule({
    imports:[HttpClientModule],
    providers:[UsersService,ProductsService,CategoryService],

})
export class CoreModule{

}