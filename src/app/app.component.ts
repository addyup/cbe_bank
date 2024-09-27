import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  artist = {
    email: '',
    bio: '',
    name: '',
    
  };

  constructor(private http: HttpClient) {}

  onSubmitArtist() {
    this.http.post('https://calculated.onrender.com/api/artist/submit', this.artist)
      .subscribe(response => {
        console.log('Artist details submitted:', response);
        alert('Form submitted successfully');
      }, error => {
        console.error('Error submitting form:', error);
        alert('Form submitted successfully');
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
