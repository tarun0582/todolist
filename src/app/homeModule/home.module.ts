import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { HomeComponent } from './Homecomponent/home.component';
import { ListComponent } from './Listcomponent/list.component';
import { AddComponent } from './Addcomponent/add.component';
import { HeaderComponent } from './Header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent,ListComponent,AddComponent,HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
   
  ]
  
})
export class HomeModule { }
