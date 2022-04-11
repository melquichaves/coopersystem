import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from '../../models/domains/investment.model';
import { InvestmentResponse } from '../../models/domains/investment.response.model';
import { LoadingService } from '../../services/common/loading.service';
import { InvestmentService } from '../../services/investment/investment.service';

@Component({
  selector: 'app-investments-card',
  templateUrl: './investments-card.component.html',
  styleUrls: ['./investments-card.component.scss']
})
export class InvestmentsCardComponent implements OnInit {
  public investmentList: Array<Investment>;

  constructor(
    private investmentService: InvestmentService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInvestments();
  }

  public async getInvestments(): Promise<void> { 
    try {
      this.loadingService.show();
      const investmentResponse: InvestmentResponse = await this.investmentService.getInvestments();
      this.investmentList = investmentResponse.getResponse().getData();
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingService.hide();
    }
  }
  
  public goToInvestment(investment: Investment): void {
    this.investmentService.setSelectedInvestment(investment);
    this.router.navigate(['investment']);
  } 
}