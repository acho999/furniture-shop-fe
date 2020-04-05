
export class Product{

    private id: number;
    private name: string;
    private price: number;
    private images: string[];
    private description: string;
    private material: string;
    private category: string;

    constructor(id?: number, name?: string, price?: number, images?: string[], descr?: string, material?: string, category?: string){
        this.setId = id;
        this.setName = name;
        this.setPrice = price;
        this.setImages = images;
        this.description = descr;
        this.setMaterial = material;
        this.setCategory = category;

    }

    get getId():number{

        return this.id;
    }

    set setId(id: number){

        this.id = id;
    }

    get getName():string{

        return this.name;
    }

    set setName(name: string){

        this.name = name;
    }

    get getPrice():number{

        return this.price;
    }

    set setPrice(price: number){

        this.price = price;
    }

    get getImages():string[]{

        return this.images;
    }

    set setImages(images: string[]){

        this.images = images;
    }

    get getDescription():string{

        return this.description;
    }

    set setDescription(description: string){

        this.description = description;
    }

    get getMaterial():string{

        return this.material;
    }

    set setMaterial(material: string){

        this.material = material;
    }

    get getCategory():string{

        return this.category;
    }

    set setCategory(category: string){

        this.category = category;
    }

}