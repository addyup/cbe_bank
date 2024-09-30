
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonsCommonComponent } from "./buttons-common/buttons-common.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsCommonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {


 
}
