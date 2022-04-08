import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundo-acoes';

  constructor(private matIconModule: MatIconModule,
    private domSanitizer: DomSanitizer) {
  }
}
