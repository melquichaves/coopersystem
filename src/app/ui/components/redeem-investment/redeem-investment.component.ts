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
  public totalValue: number = 0;
  
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private investmentService: InvestmentService
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

  public setTotalRedeemValue(): void {
    this.redeemValues.controls.forEach(control => {
      this.totalValue += control.value
    });
  }

  public goToInvestment(): void {
    this.router.navigate(['/']);
  }

  public redeem(): void {
    if (this.redeemValues.valid) {
      this.dialog.open(RedeemDialogComponent);
      this.removeRedeemValueFromStock();
      this.removeTotalRedeemValue();
    } else {
      this.dialog.open(RedeemDialogComponent, {
        data: { stocks: this.getInvalidStocks() },
      });
    }
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

  public removeTotalRedeemValue(): void {
    this.investment.setSaldoTotal(this.investment.getSaldoTotal() - this.totalValue);
    this.investmentService.setSelectedInvestmentTotalValue(this.investment.getSaldoTotal() - this.totalValue)
  }

  public removeRedeemValueFromStock(): void {
    for (let i = 0; i < this.redeemValues.controls.length; i++) {
      if (this.redeemValues.controls[i].valid) {
        this.investment.getAcoes()[i].setCalculatedValue(
          this.investment.getAcoes()[i].getCalculatedValue() - this.redeemValues.controls[i].value
        );
      }
      this.redeemValues.controls[i].setValue(0);
    }
  }
}
