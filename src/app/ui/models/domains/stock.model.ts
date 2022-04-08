export class Stock {
    private id : string;
    private nome : string;
    private percentual : number;

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPercentual(): number {
        return this.percentual;
    }

    public setPercentual(percentual: number): void {
        this.percentual = percentual;
    }   
}