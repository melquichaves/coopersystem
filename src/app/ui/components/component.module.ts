import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestmentsCardComponent } from './investments-card/investments-card.component';

@NgModule({
    declarations: [InvestmentsCardComponent],
    imports: [
        CommonModule, 
        RouterModule
    ],
    exports: [InvestmentsCardComponent],
    entryComponents: []
})

export class ComponentModule { }