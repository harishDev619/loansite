import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  // {
  //   path:'**',
  //   component:HomeComponent
  // },
  {
    path:'service-details',
    component: ServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
