import { ModuleWithProviders, NgModule } from '@angular/core';
import { RepositoryModule } from '../repositories/repository.module';
import { LoadingService } from './common/loading.service';
import { InvestmentService } from './investment/investment.service';

@NgModule({
  imports: [RepositoryModule.forRoot()],
})

export class ServiceModule {
  static forRoot(): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: [
        InvestmentService,
        LoadingService
      ]
    };
  }
 }
