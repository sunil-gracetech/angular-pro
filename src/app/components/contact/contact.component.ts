import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactModel } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact:ContactModel
  constructor(private _title:Title, private _met:Meta) { 
    this._title.setTitle("Contact-us")
    this._met.addTag({name:"contact us",description:"this is the contact page for us"})
  }

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
