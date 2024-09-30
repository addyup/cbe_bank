import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Type, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up-it',
  standalone: true,
  imports: [FormsModule, MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,],
  templateUrl: './sign-up-IT.component.html',
  styleUrl: './sign-up-IT.component.less'
})
export class SignUpITComponent {
 
  opened = false; 

  toggleSidenav() {
    this.opened = !this.opened; 
  }

  artist = {
    email: '',
    bio: '',
    name: ''
  };

  constructor(private http: HttpClient) {}


  

  onSubmitCandidate() {

   

      this.http.post('https://calculated.onrender.com/api/artist/submit', this.artist)
      .subscribe(response => {
        console.log('Artist details submitted:', response);
        alert('Form submitted successfully');
      }, error => {
        console.error('Error submitting form:', error);
        alert('Form submitted successfully');
      });
  }

 
  }

