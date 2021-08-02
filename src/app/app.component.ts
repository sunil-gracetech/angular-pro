import { AfterViewInit, Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit
{
  title = 'mynewapp';


ngOnInit(): void {
  console.log("I am Initialized !")
} 

ngAfterViewInit(){
  
  console.log(" view has been initialized !")
}
}
