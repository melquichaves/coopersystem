import { Injectable } from '@angular/core';
import { Investment } from '../../models/domains/investment.model';
import { InvestmentResponse } from '../../models/domains/investment.response.model';
import { InvestmentRepository } from '../../repositories/investment.repository';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private selectedInvestment: Investment;

  constructor(
    private investmentRepository: InvestmentRepository
  ) {}

  public getSelectedInvestment(): Investment { 
    return this.selectedInvestment;
  }

  public setSelectedInvestment(investment: Investment): void {
    this.selectedInvestment = investment;
  }

  public setSelectedInvestmentTotalValue(value: number): void {
    this.selectedInvestment.setSaldoTotal(value);
  }

  public async getInvestments(): Promise<InvestmentResponse> {
    return await this.investmentRepository.getInvestments();
  }
}