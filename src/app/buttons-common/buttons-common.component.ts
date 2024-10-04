import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ATagResultsComponent } from "../atag-results/atag-results.component";

@Component({
  selector: 'buttons-common',
  standalone: true,
  imports: [RouterOutlet, ATagResultsComponent],
  templateUrl: './buttons-common.component.html',
  styleUrl: './buttons-common.component.less'
})
export class ButtonsCommonComponent {

  constructor( public router: Router) {}

  navigateToSignupARTIST() {
    this.router.navigate(['/signupARTIST']);
  }

  navigateToSIGNUPit() {
    this.router.navigate(['/SIGNUPit']);
  }

}
