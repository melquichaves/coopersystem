import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable()
export class LoadingService {
    public loading = new BehaviorSubject<boolean>(false);

    constructor() { }
    
    public show(): void {
        this.loading.next(true);
    }

    public hide(): void {
        this.loading.next(false);
    }

}
