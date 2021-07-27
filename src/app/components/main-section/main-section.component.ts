import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/tools/employee.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

employees;
  constructor(private _employeeService:EmployeeService) { 
   
  }


  ngOnInit(): void {
    this._employeeService.GetAllEmployees().subscribe(res=>{
      this.employees=res;
    })
  }

}
