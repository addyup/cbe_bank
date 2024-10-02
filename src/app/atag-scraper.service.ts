import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ATagScraperService {
  private apiUrl = 'https://calculated.onrender.com/api/artist/a-tm';  // Adjust if needed
  private baseUrl = 'https://www.ticketmaster.com';

  constructor(private http: HttpClient) {}

  getATagResults(url: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}`)
      .pipe(
        map((results: string[]) => {
          return results.map(result => {
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
        })
      );
  }
}
