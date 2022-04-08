import { Investment } from "./investment.model";

export class ResponseData {
    private status: string;
    private data: string;
    private listaInvestimentos: Array<Investment>;

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getData(): string {
        return this.data;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public getListaInvestimentos(): Array<Investment> {
        return this.listaInvestimentos;
    }

    public setListaInvestimentos(listaInvestimentos: Array<Investment>): void {
        this.listaInvestimentos = listaInvestimentos;
    }

}