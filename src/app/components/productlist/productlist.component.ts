import { Component, OnInit } from '@angular/core';
import { Productlist } from './productlist';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
Products=Productlist
  constructor() { }

  ngOnInit(): void {
  }

}
