import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TablesComponent } from './tables/tables.component';
import { UtilitesComponent } from './utilites/utilites.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"edit-profile",
    component:EditProfileComponent
  }
  ,
  {
    path:"tables",
    component:TablesComponent
  }
  ,
  {
    path:"utilites",
    component:UtilitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
