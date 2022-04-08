import { NgModule } from "@angular/core";
import { ComponentModule } from "../../components/component.module";
import { HomeRoutingModule } from "../../routing/home-routing.module";
import { ServiceModule } from "../../services/service.module";
import { HomeComponent } from "./home.component";
import { InvestmentComponent } from './investment/investment.component';

@NgModule({
    declarations: [
        HomeComponent,
        InvestmentComponent      
    ],
    imports: [
        ComponentModule,
        HomeRoutingModule,
        ServiceModule.forRoot(),
    ],
    exports: []
})
export class HomeModule {}