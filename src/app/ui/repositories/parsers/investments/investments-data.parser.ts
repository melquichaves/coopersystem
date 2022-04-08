import { Injectable } from "@angular/core";
import { ResponseData } from "src/app/ui/models/domains/response-data.model";
import { AbstractParser } from "../parser";
import { InvestmentListParser } from "./investment-list.parser";


@Injectable()
export class InvestmentsDataParser extends AbstractParser<ResponseData>{
    constructor(
        private investmentListParser: InvestmentListParser
    ){
        super();
    }

    parse(payload: any): ResponseData {
        const responseData = new ResponseData();
        
        if(!payload)
            return responseData;

        responseData.setStatus(payload.status);
        responseData.setData(payload.data);
        responseData.setListaInvestimentos(this.investmentListParser.parseList(payload.listaInvestimentos));

        return responseData;   
    }
}