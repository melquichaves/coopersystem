import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RemoteGatewayFactory } from './remote.gateway.factory';


@NgModule({
  imports: [HttpClientModule]
})

export class GatewayModule {
    static forRoot(): ModuleWithProviders<GatewayModule> {
      return {
        ngModule: GatewayModule,
        providers: [RemoteGatewayFactory]
      };
    }
  }

