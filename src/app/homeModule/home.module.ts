import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { HomeComponent } from './Homecomponent/home.component';
import { ListComponent } from './Listcomponent/list.component';
import { AddComponent } from './Addcomponent/add.component';
import { HeaderComponent } from './Header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './Update/update.component';

@NgModule({
  declarations: [HomeComponent,ListComponent,AddComponent,HeaderComponent,UpdateComponent],
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
