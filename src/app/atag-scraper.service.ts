import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ATagScraperService {
  private apiUrl = 'https://calculated.onrender.com/api/artist/a-tm';  // Adjust if needed
  private baseUrl = 'https://www.ticketmaster.com';

  constructor(private http: HttpClient) {}


  getATagResults(): string[] {
    let cleanedResults: string[] = [];
  
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*', // add your required headers here
      'Content-Type': 'application/json',
    });
  
    this.http.get<string[]>(
      'https://calculated.onrender.com/api/artist/a-tm'
      // 'http://localhost:8080/api/artist/a-tm'
      , { headers })
      .subscribe(response => {
        cleanedResults = response.map(result => {
          // Remove "Text:" and "Link:"
          let cleanedResult = result.replace(/Text: /g, '').replace(/Link: /g, '');
  
          // Prefix baseUrl to all links starting with " /"
          cleanedResult = cleanedResult.replace(' /', `${this.baseUrl}/`);
  
          // Add space after commas
          cleanedResult = cleanedResult.replace(/,([^ ])/g, ', $1');
  
          // Make any string starting with 'https' a clickable link
          cleanedResult = cleanedResult.replace(/(https:\/\/[^\s]+)/g, '<a class="link-warning" href="$1" target="_blank">$1</a>');
  
          return cleanedResult;
        });
  
      }, error => {
      });
  
    return cleanedResults;
  }
  
    

  
}
