import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { InvestmentsCardComponent } from './investments-card/investments-card.component';
import { LoadingPanelComponent } from './loading-panel/loading-panel.component';
import { InvestmentProfileComponent } from './investment-profile/investment-profile.component';
import { RedeemInvestmentComponent } from './redeem-investment/redeem-investment.component';
import { RedeemDialogComponent } from './redeem-dialog/redeem-dialog.component';

@NgModule({
    declarations: [
        InvestmentsCardComponent, 
        LoadingPanelComponent, 
        InvestmentProfileComponent, 
        RedeemInvestmentComponent, RedeemDialogComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule
    ],
    exports: [
        InvestmentsCardComponent, 
        LoadingPanelComponent, 
        InvestmentProfileComponent, 
        RedeemInvestmentComponent
    ],
    entryComponents: []
})

export class ComponentModule { }