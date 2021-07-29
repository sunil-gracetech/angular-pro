import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit {

  txt;
  @Input() messageReciver;
  @Output() messageSender=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg(msg){
    //console.warn(msg)
    this.messageSender.emit(msg)
  }
}
