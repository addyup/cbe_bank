
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonsCommonComponent } from "./buttons-common/buttons-common.component";
import { ATagResultsComponent } from './atag-results/atag-results.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsCommonComponent, ATagResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

}
