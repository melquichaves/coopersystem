import { environment } from "src/environments/environment";
import { Url } from "./url.model";

export class BackendUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    public override getUrl(): string {
        return environment.backendUrl + this.action;
    }
}