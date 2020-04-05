import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/core.module/services/category.service';
import { CategoryModel } from 'src/app/models/category.model';


@Component({
    selector:'categories',
    templateUrl:'./category.component.html',
    styleUrls:['./category.component.css']
})
export class CategoryComponent implements OnInit{

    queryParam: string;

    private allProducts: CategoryModel[];

    productImages: string[];


    constructor(private categoriesService: CategoryService, private route: ActivatedRoute){}

    ngOnInit(): void {
         this.queryParam = this.route.snapshot.queryParams['name'];
         this.route.queryParams.subscribe((params: Params)=>{
            this.queryParam = params['name'];
         })

         this.allProducts = this.categoriesService.getCategories();
         const category = this.allProducts.filter(x=>x.getName === this.queryParam)
         this.productImages = category[0].getImages;
    }
    
}