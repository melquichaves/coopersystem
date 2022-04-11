export class Stock {
    private id: string;
    private nome: string;
    private percentual: number;
    private calculatedMaxValue: number;

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

    public setCalculatedMaxValue(value: number): void {
        this.calculatedMaxValue = value * (this.percentual / 100);
    }

    public getCalculatedValue(): number {
        return this.calculatedMaxValue;
    }

    public setCalculatedValue(value: number): number {
        return this.calculatedMaxValue = value;
    }

}