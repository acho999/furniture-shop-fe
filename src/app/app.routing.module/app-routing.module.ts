import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../shared.module/login.component/login.component';
import { HomeComponent } from '../shared.module/home.component/home.component';
import { RegistrationComponent } from '../shared.module/register.component/register.component';


const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
