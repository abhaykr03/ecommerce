import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';


@Component({
  selector: 'listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  name:string = '';
  description: string = '';
  price: string = '';

@Input() buttonText;
@Input() currentName = '';
@Input() currentDescription = '';
@Input() currentPrice = '';

@Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price)
    })
  }
}
