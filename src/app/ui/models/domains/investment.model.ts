import { Stock } from "./stock.model";

export class Investment {
    private nome: string;
    private objetivo: string;
    private saldoTotal: number
    private indicadorCarencia: string;
    private acoes: Array<Stock>;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getObjetivo(): string {
        return this.objetivo;
    }

    public setObjetivo(objetivo: string): void {
        this.objetivo = objetivo;
    }

    public getSaldoTotal(): number {
        return this.saldoTotal;
    }

    public setSaldoTotal(saldoTotal: number): void {
        this.saldoTotal = saldoTotal;
    }

    public getIndicadorCarencia(): string {
        return this.indicadorCarencia;
    }

    public setIndicadorCarencia(indicadorCarencia: string): void {
        this.indicadorCarencia = indicadorCarencia;
    }

    public getAcoes(): Array<Stock> {
        return this.acoes;
    }

    public setAcoes(acoes: Array<Stock>): void {
        this.acoes = acoes;
    }

    public isCarencia(): boolean {
        return this.indicadorCarencia === 'N';
    }


}