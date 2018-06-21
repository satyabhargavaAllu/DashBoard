import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component'

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'adc',loadChildren:"./adc/adc.module#AdcModule"},  
  {path:'adg',redirectTo:'/'},
  {path:'ccoe',redirectTo:'/'},
  {path:'lea',redirectTo:'/'},
  {path:'tra',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
