import { Product } from './product.model';

export class CategoryModel{

    private id: number;
    private name: string;
    private products: Product[];
    private images: string[];

    constructor(id:number,name:string,products:Product[],images: string[]){

        this.setId = id;
        this.setName = name;
        this.setProducts = products;
        this.images = images;
    }

    get getId():number{

        return this.id;
    }

    set setId(id: number){

        this.id = id;
    }

    get getImages():string[]{

        return this.images;
    }

    set setImages(images: string[]){

        this.images = images;
    }

    get getName():string{

        return this.name;
    }

    set setName(name: string){

        this.name = name;
    }

    get getProducts():Product[]{

        return this.products;
    }

    set setProducts(products: Product[]){

        this.products = products;
    }

}