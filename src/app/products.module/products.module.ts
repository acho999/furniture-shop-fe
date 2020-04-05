import {NgModule} from '@angular/core'
import { CategoryComponent } from './category.component/category.component';
import { ProductRoutingModule } from './products.routing.module';
import { ProductComponent } from './product.component/product.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[CategoryComponent,ProductComponent],
    imports:[ProductRoutingModule,CommonModule],
    providers:[],
    entryComponents:[],
    exports:[],
    bootstrap:[]
})
export class ProductsModule{

}