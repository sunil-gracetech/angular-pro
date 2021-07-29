import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcom',
  templateUrl: './parentcom.component.html',
  styleUrls: ['./parentcom.component.css']
})
export class ParentcomComponent implements OnInit {

  message="welcome"
  fromParent;
  constructor() { }

  ngOnInit(): void {
  }
  messageReciever2(msg){
   // console.log(msg)
    this.fromParent=msg
  }

}
