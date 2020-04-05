import { Component, OnInit} from '@angular/core';
import { UsersService } from '../../core.module/services/users.service';
import { login_reg_animations ,changeImages} from '../../animations';
import { Subscription, interval } from 'rxjs';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/core.module/services/category.service';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css'],
    animations:[
        login_reg_animations,
        changeImages
    ]
})
export class HomeComponent implements OnInit{
    constructor(private usersService: UsersService,private categoryService: CategoryService){}
    showImage:boolean;
    sub:Subscription;
    index:number = -1;
    categories: CategoryModel[] = this.categoryService.getCategories();
    images=[
        "../../../assets/images/диван/адисън/адисън.jpg",
        '../../../assets/images/кухня/вега/вега.jpg',
        '../../../assets/images/секция/дормина/dormina.jpg',
        ];
    categoryImages: string[] = this.getImages();
    image: string = this.images[0];

    
    ngOnInit(): void { 
        this.sub = interval(5000).subscribe(()=>{

            if(this.index === this.images.length-1){
                this.index = -1;
            }
            this.index++;
            switch (this.index) {
                case 0 : if (this.image === this.images[this.images.length-1]) { this.image = null ; setTimeout(()=>{this.image = this.images[this.index]},1500)}; break;
                case 1: this.image = null,setTimeout(()=>{this.image = this.images[this.index]},1500); break;
                case 2: this.image = null,setTimeout(()=>{this.image = this.images[this.index]},1500); break;
            
                default:
                    break;
            }
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onChaneImageForward(){

        this.sub.unsubscribe();
       
        if (this.index === this.images.length-1) {
            this.index = -1;
        } 
        if (this.index === -1 && this.image === this.images[0]) {
            this.index = 0;
        }
        this.index++;
        this.image = null;
        setTimeout(()=>{this.image = this.images[this.index];},1500);
    }

    onChaneImageBack(){

        this.sub.unsubscribe();
       
        if (this.index < 1) {
            this.index = this.images.length;
        } 
        this.index--;
        this.image = null;
        setTimeout(()=>{this.image = this.images[this.index];},1500);
        
        
    }

    getImages():string[]{

        let  photos: string[] = [];
 
        for (let index = 0; index < this.categories.length; index++) {
            const element = this.categories[index].getImages[0];
            photos.push(element);
            
        }
 
        return photos;
 
     }

}