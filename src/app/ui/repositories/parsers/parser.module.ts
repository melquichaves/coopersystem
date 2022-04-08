import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
  ]
})

export class ParserModule {
  static forRoot(): ModuleWithProviders<ParserModule> {
    return {
      ngModule: ParserModule,
      providers: []
    };
  }
}