import { ModuleWithProviders, NgModule } from '@angular/core';
import { InvestmentListParser } from './investments/investment-list.parser';
import { InvestmentsDataParser } from './investments/investments-data.parser';
import { InvestmentsParser } from './investments/investments.parser';
import { StockListParser } from './investments/stock-list.parser';

@NgModule({
  imports: [
  ]
})

export class ParserModule {
  static forRoot(): ModuleWithProviders<ParserModule> {
    return {
      ngModule: ParserModule,
      providers: [
        InvestmentListParser,
        InvestmentsDataParser,
        InvestmentsParser,
        StockListParser
      ]
    };
  }
}