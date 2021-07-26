import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  formData:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formData=new FormGroup({
      fname:new FormControl('', Validators.required),
      lname:new FormControl('', Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      gender:new FormControl(''),
      experience:new FormControl(''),
      csalary:new FormControl(''),
      excpected:new FormControl(''),
      comment:new FormControl(''),

    })
  }

  submit(){
    console.log(this.formData)
  }

}
