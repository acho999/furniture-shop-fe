import { Injectable } from '@angular/core';
import { categories } from 'src/app/database';
import { CategoryModel } from 'src/app/models/category.model';

@Injectable({providedIn:'root'})
export class CategoryService{

    public getCategories():CategoryModel[]{

        return categories;

    }

}