import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ FormsModule, MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './sign-up-ARTIST.component.html',
  styleUrl: './sign-up-ARTIST.component.less'
})
export class SignUpARTISTComponent {
  artist = {
    email: '',
    bio: '',
    name: '',
    
  };

  constructor(private http: HttpClient) {}

  onSubmitArtist() {
    this.http.post('https://calculated.onrender.com/api/artist/submit', this.artist)
      .subscribe(response => {
      }, error => {
      });
  }

  // @ViewChild('sidenav') sidenav!: MatSidenav;

  // toggleSidenav() {
  //   this.sidenav.toggle();
  // }

  opened = false; // Controls sidenav state

  toggleSidenav() {
    this.opened = !this.opened; // Toggle state
  }
  
}
