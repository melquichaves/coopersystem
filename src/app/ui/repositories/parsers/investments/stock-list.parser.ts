import { Injectable } from "@angular/core";
import { Stock } from "src/app/ui/models/domains/stock.model";
import { AbstractParser } from "../parser";


@Injectable()
export class StockListParser extends AbstractParser<Stock>{
    parse(payload: any): Stock {
        const stock = new Stock();
        
        if(!payload) 
            return stock;
        
        stock.setId(payload.id);
        stock.setNome(payload.nome);
        stock.setPercentual(payload.percentual);

        return stock;   
    }
}