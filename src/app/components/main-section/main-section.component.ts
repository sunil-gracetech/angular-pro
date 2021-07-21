import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  message="welcome message"
  courses=["php","java","python","node","react","angular"]
  count=0;
  css1;
  css2;
  cls1={"bg-success":true,"text-danger":true}
  cls2={"bg-info":true,"text-success":true}
  employees;
  constructor() { 
    this.css1={"color":"green","background":"yellow","border":"2px dotted orange"}
    this.css2={"color":"red","background":"lightgreen","border":"2px dotted blue"}
    this.employees=[
      {id:1,name:"adiyta","dob":new Date("1998-03-02"),"gender":1,"salary":12000},
      {id:2,name:"Mohit","dob":new Date("1998-03-02"),"gender":1,"salary":12000},
      {id:3,name:"Sumitra","dob":new Date("1992-07-02"),"gender":0,"salary":16000},
      {id:4,name:"Rachita","dob":new Date("1991-02-09"),"gender":0,"salary":15000},
      {id:5,name:"Kalpana","dob":new Date("1995-05-01"),"gender":0,"salary":19000}
    ]
  }


  ngOnInit(): void {
  }

  Counter(){
    this.count++;
  }

}
