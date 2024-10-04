import { Component, OnInit } from '@angular/core';
import { ATagScraperService } from '../atag-scraper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'a-tm',
  standalone: true,
  templateUrl: './atag-results.component.html',
  styleUrls: ['./atag-results.component.less']
})
export class ATagResultsComponent implements OnInit {
  aTagResults: string[] = [];
  url: string = 'https://www.ticketmaster.com/';  // The URL you want to scrape

  constructor(private scraperService: ATagScraperService,  public router: Router) {}

  ngOnInit(): void {
    this.fetchATagResults();
  }

  // Fetching results from the service
  fetchATagResults(): void {
      this.aTagResults = this.scraperService.getATagResults();
  }
}
