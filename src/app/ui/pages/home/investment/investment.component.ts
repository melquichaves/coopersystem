import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from 'src/app/ui/models/domains/investment.model';
import { InvestmentService } from 'src/app/ui/services/investment/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  public investment: Investment;

  constructor(
    private investmentService: InvestmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSelectedInvestment();
    this.checkIfInvestmentIsSelected();
  }

  public checkIfInvestmentIsSelected(): void {
    if (!this.investment) {
      this.router.navigate(['/']);
    }
  }

  public getSelectedInvestment(): void { 
    this.investment = this.investmentService.getSelectedInvestment();
  }

}
