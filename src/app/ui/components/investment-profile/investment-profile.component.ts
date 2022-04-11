import { Component, Input, OnInit } from '@angular/core';
import { Investment } from '../../models/domains/investment.model';
import { InvestmentService } from '../../services/investment/investment.service';

@Component({
  selector: 'app-investment-profile',
  templateUrl: './investment-profile.component.html',
  styleUrls: ['./investment-profile.component.scss']
})
export class InvestmentProfileComponent implements OnInit {

  constructor(
    public investmentService: InvestmentService
  ) { }

  ngOnInit(): void {
  }

}
