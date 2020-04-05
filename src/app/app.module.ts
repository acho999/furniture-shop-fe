import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module/app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer.module/customer.module';
import { AdminModule } from './admin.module/admin.module';
import { CoreModule } from './core.module/core.module';
import { SharedModule } from './shared.module/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products.module/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomerModule,
    AdminModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
