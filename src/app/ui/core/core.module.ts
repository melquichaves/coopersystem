import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CurrencyMaskModule,
        OverlayModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        CommonModule,
        
    ],
    exports: [
        CurrencyMaskModule,
        OverlayModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        CommonModule,
    ]
})
export class CoreModule { }