import { Investment } from "./investment.model";

export class ResponseData {
    private status: string;
    private data: Array<Investment>;

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getData(): Array<Investment> {
        return this.data;
    }

    public setData(data: Array<Investment>): void {
        this.data = data;
    }

}