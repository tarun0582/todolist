import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Addcomponent/add.component';
import { HomeComponent } from './Homecomponent/home.component';
import { ListComponent } from './Listcomponent/list.component';
import { UpdateComponent } from './Update/update.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'add', component: AddComponent },
          {path: 'list',component:ListComponent},
          {path:'update/:id',component:UpdateComponent},
          {path: '', redirectTo: '/home/list', pathMatch: 'full' },
        ],
      },
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
