import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Categories
  constructor() {
    this.Categories=[
      {id:11,name:'Electronics'},
      {id:12,name:'Fashion'},
      {id:13,name:'Furniture'},
      {id:14,name:'Education'},
      {id:15,name:'Sports'},
      {id:16,name:'Kids'}
    ]
   }
   

  ngOnInit(): void {
  }

}
