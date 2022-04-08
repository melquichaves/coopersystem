import { Injectable } from '@angular/core';
import { RemoteGateway } from './remote.gateway';
import { HttpClient } from '@angular/common/http';
import { AppContext } from '../contexts/app-context';

@Injectable()
export class RemoteGatewayFactory {

    constructor(
        private httpClient: HttpClient,
        private appContext: AppContext) {
    }

    createDefaultRemoteGateway(): RemoteGateway {
        return new RemoteGateway(this.appContext.getBackendUrl(), this.httpClient);
    } 

    createRemoteGateway(backEndUrl: string): RemoteGateway {
        return new RemoteGateway(backEndUrl, this.httpClient);
    }
}