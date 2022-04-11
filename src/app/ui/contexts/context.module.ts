import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppContext } from './app-context';


@NgModule({
})

export class ContextModule {
    static forRoot(): ModuleWithProviders<ContextModule> {
      return {
        ngModule: ContextModule,
        providers: [
            AppContext
        ]
      };
    }
  }