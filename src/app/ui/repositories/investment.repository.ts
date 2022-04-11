import { Injectable } from "@angular/core";
import { RemoteGatewayFactory } from "../gateways/remote.gateway.factory";
import { BackendUrl } from "../models/backend-url";
import { InvestmentResponse } from "../models/domains/investment.response.model";
import { InvestmentsParser } from "./parsers/investments/investments.parser";

@Injectable()
export class InvestmentRepository {

    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory, 
        private investmentsParser: InvestmentsParser
    ) {}
        
    public async getInvestments(): Promise<InvestmentResponse> {
        try {
            const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
            const data = await remoteGateway.get(new BackendUrl('ca4ec77d-b941-4477-8a7f-95d4daf7a653'));
            return this.investmentsParser.parse(data);
        }
        catch (error) {
            return await Promise.reject(error);
        }
    }
}