import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ApiUrl="https://jsonplaceholder.typicode.com/todos/"
  records;
  constructor(private _title:Title, private _http:HttpClient) { 
    this._title.setTitle("About-us")
  }

  ngOnInit(): void {

    // this._http.get(this.ApiUrl).toPromise().then((res:any)=>{
    //   console.log(res)
    //   this.records=res;
    // }).catch(err=>{
    //   console.error(err)
    // })

    this._http.get(this.ApiUrl).subscribe((res:any)=>{
     // console.log(res)
      this.records=res;
    })
  }

}
