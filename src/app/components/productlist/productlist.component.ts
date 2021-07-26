import { Component, OnInit } from '@angular/core';
import { Productlist } from './productlist';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
Products=Productlist
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      let id=p["id"]
      this.Products=Productlist.filter(e=>e.catid==id)
    })
  }

}
