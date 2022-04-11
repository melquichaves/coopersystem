import { ModuleWithProviders, NgModule } from '@angular/core';
import { GatewayModule } from '../gateways/gateway.module';
import { InvestmentRepository } from './investment.repository';
import { ParserModule } from './parsers/parser.module';

@NgModule({
  imports: [
    ParserModule.forRoot(),
    GatewayModule.forRoot()
  ]
})

export class RepositoryModule {
  static forRoot(): ModuleWithProviders<RepositoryModule> {
    return {
      ngModule: RepositoryModule,
      providers: [InvestmentRepository]
    };
  }
}