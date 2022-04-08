import { Injectable } from "@angular/core";
import { ResponseData } from "src/app/ui/models/domains/response-data.model";
import { InvestmentResponse } from "../../../models/domains/investment.response.model";
import { AbstractParser } from "../parser";


@Injectable()
export class InvestmentsDataParser extends AbstractParser<ResponseData>{
    constructor(){
        super();
    }

    parse(payload: any): ResponseData {
        const responseData = new ResponseData();
        
        if(!payload) {
            return responseData;
        }
        

        return responseData;   
    }
}