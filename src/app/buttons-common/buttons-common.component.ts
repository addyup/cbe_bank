import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'buttons-common',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './buttons-common.component.html',
  styleUrl: './buttons-common.component.less'
})
export class ButtonsCommonComponent {

  constructor( public router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

}
