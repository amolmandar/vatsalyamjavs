import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routess: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: PageComponent,data:{page:'home'}},
  {path:'about', component: PageComponent, data:{page:'about'}},
  {path:'contact', component: PageComponent, data:{page:'contact'}},
  {path:'home/homemore', component: PageComponent,data:{page:'homemore'}},
  {path:'login', component: PageComponent, data:{page:'login'}},
  {path:'donate', component: PageComponent, data:{page:'donate'}},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routess)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
