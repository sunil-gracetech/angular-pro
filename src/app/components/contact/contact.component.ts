import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact:ContactModel
  constructor() { }

  ngOnInit(): void {
    this.resetForm()
  }

  submit(data){
    console.log(data)
  }
  resetForm(){
    this.contact={
      id:0,
      name:'',
      email:'',
      message:'',
      mobile:''
    }
  }

}
