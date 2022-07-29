import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';



const routes: Routes = [
  {path:'PortfolioComponent', component:PortfolioComponent},
/*   {path:'/', redirectTo:'PortfolioComponent'},
 */  {path:'', redirectTo:'PortfolioComponent', pathMatch:"full"}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
