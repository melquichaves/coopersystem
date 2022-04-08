import { Injectable } from "@angular/core";
import { InvestmentResponse } from "../../../models/domains/investment.response.model";
import { AbstractParser } from "../parser";
import { InvestmentsDataParser } from "./investments-data.parser";


@Injectable()
export class InvestmentsParser extends AbstractParser<InvestmentResponse>{
    constructor(
        private investmentsDataParser: InvestmentsDataParser
    ){
        super();
    }

    parse(payload: any): InvestmentResponse {
        const investmentResponse = new InvestmentResponse();
        
        if(!payload) 
            return investmentResponse;
        
        investmentResponse.setResponse(this.investmentsDataParser.parse(payload.response));
        return investmentResponse;   
    }
}