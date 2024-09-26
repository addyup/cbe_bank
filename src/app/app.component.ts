import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
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
}
