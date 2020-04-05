import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component/category.component';
import { RouterModule } from '@angular/router';
import {ProductComponent} from './product.component/product.component';
import {Routes} from '@angular/router';

const routes: Routes = [
    {path:'category',component:CategoryComponent},
    {path:'product/:name/:id',component:ProductComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    providers:[],
    entryComponents:[],
    exports:[RouterModule],
    bootstrap:[]
})
export class ProductRoutingModule{

}