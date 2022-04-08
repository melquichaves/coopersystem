import { ModuleWithProviders, NgModule } from '@angular/core';
import { ParserModule } from './parsers/parser.module';

@NgModule({
  imports: [ParserModule.forRoot()]
})

export class RepositoryModule {
  static forRoot(): ModuleWithProviders<RepositoryModule> {
    return {
      ngModule: RepositoryModule,
      providers: []
    };
  }
}