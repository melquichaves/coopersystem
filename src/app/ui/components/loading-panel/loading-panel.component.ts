import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { LoadingService } from "../../services/common/loading.service";

@Component({
    selector: "loading-panel",
    templateUrl: "./loading-panel.component.html",
    styleUrls: ["./loading-panel.component.scss"]
})
export class LoadingPanelComponent implements OnInit {
    public loading: boolean;

    constructor(
      private loadingService: LoadingService
    ) { 
      this.loadingService.loading.subscribe((data) => {
        this.loading = data;
      });
    }

    ngOnInit(): void {
    }
}
