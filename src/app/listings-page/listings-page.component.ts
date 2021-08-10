import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  listings: Listing [] = []   // empty coz will fetch the data from the server in live project otherwise lisitngs = fakeListings; would have been done the job
  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
