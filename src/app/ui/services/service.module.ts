import { ModuleWithProviders, NgModule } from '@angular/core';
import { RepositoryModule } from '../repositories/repository.module';

@NgModule({
  imports: [RepositoryModule.forRoot()],
})

export class ServiceModule {
  static forRoot(): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: []
    };
  }
 }
