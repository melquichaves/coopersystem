import { ResponseData } from "./response-data.model";

export class InvestmentResponse {
    private response: ResponseData;

    public getResponse(): ResponseData {
        return this.response;
    }

    public setResponse(response: ResponseData): void {
        this.response = response;
    }
}