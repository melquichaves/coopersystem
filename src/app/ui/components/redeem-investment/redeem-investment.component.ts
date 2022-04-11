import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Investment } from '../../models/domains/investment.model';
import { Stock } from '../../models/domains/stock.model';
import { InvestmentService } from '../../services/investment/investment.service';
import { CustomValidators } from '../../validators/validators';
import { RedeemDialogComponent } from '../redeem-dialog/redeem-dialog.component';

@Component({
  selector: 'app-redeem-investment',
  templateUrl: './redeem-investment.component.html',
  styleUrls: ['./redeem-investment.component.scss']
})
export class RedeemInvestmentComponent implements OnInit {
  @Input() investment: Investment;
  public redeemValues = new FormArray([]);
  
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setRedeemMaxValues();
    this.iterateForm();
  }

  private setRedeemMaxValues(): void {
    if(this.investment) {
      this.investment.getAcoes().forEach(acao => {
        acao.setCalculatedMaxValue(this.investment.getSaldoTotal())
      });
    }
  }

  public iterateForm(): void {
    if(this.investment) {
      this.investment.getAcoes().forEach(acao => {
        this.redeemValues.push(
          new FormControl('', CustomValidators.maxValueValidator(
            acao.getCalculatedValue()
          )
        ));
      });
    }
  }

  public getControl(index: number) {
    return this.redeemValues.controls[index] as FormControl
  }

  public goToInvestment(): void {
    this.router.navigate(['/']);
  }

  public redeem(): void {
    if (this.redeemValues.valid) {
      this.dialog.open(RedeemDialogComponent);
    } else {
      this.dialog.open(RedeemDialogComponent, {
        data: { stocks: this.getInvalidStocks() },
      });
    }
  }
  
  public getTotalRedeemValue(): number {
    let total = 0;
    this.redeemValues.controls.forEach(control => {
      total += control.value
    });
    return total;
  }

  public getInvalidStocks(): Array<Stock> {
    let invalidStocks: Array<Stock> = [];

    for (let i = 0; i < this.redeemValues.controls.length; i++) {
      if (!this.redeemValues.controls[i].valid) {
        invalidStocks.push(this.investment.getAcoes()[i]);
      }
    }
  
    return invalidStocks;
  }

}
