import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminPanelComponent } from './admin.panel/admin.panel.component';

@NgModule({
    declarations:[AdminPanelComponent],
    imports:[FormsModule,AdminRoutingModule],
    providers:[],
    bootstrap:[],
    entryComponents:[],
    exports:[]
})
export class AdminModule{}