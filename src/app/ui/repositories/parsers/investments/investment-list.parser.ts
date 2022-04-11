import { Injectable } from "@angular/core";
import { Investment } from "src/app/ui/models/domains/investment.model";
import { AbstractParser } from "../parser";
import { StockListParser } from "./stock-list.parser";


@Injectable()
export class InvestmentListParser extends AbstractParser<Investment>{
    constructor(
        private stockListParser: StockListParser
    ){
        super();
    }

    parse(payload: any): Investment {
        const investment = new Investment();
        
        if(!payload)
            return investment;

        investment.setNome(payload.nome);
        investment.setObjetivo(payload.objetivo);
        investment.setSaldoTotal(payload.saldoTotal);
        investment.setIndicadorCarencia(payload.indicadorCarencia);
        investment.setAcoes(this.stockListParser.parseList(payload.acoes));

        return investment;   
    }
}