import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { InvestmentComponent } from "../pages/home/investment/investment.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'investment',
        component: InvestmentComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })

  export class HomeRoutingModule {}