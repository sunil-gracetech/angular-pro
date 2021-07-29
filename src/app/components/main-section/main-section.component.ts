import { Component, OnInit , TemplateRef} from '@angular/core';
import { EmployeeService } from 'src/app/tools/employee.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

employees;
employee:FormGroup;
modalRef:BsModalRef
  constructor(private _employeeService:EmployeeService,
    private _toast:ToastrService,
    private modalService:BsModalService
    ) { 
   this.employee=new FormGroup({
     "id":new FormControl(''),
     "name":new FormControl(''),
     "gender":new FormControl(''),
     "dob":new FormControl(''),
     "salary":new FormControl(''),   
   })
  }


  ngOnInit(): void {
   this.loadEmployee()
  }

  editEmployee(emp) {
    //this.modalRef = this.modalService.show(template);
  this.employee.setValue({...emp})
  }
  loadEmployee(){
    this._employeeService.GetAllEmployees().subscribe(res=>{
      this.employees=res;
    })
  }
  submit(){
   console.log(this.employee.value)

      if(this.employee.value.id=="")
      {
    this._employeeService.CreateEmployee(this.employee.value).subscribe(e=>{
      console.log(e)
      this._toast.success("Employee Created Successfully !","Success")
      this.employee.reset();
      this.loadEmployee()
    })
      }
      else{
        const id=this.employee.value.id;
        let emp=this.employee.value;
        delete emp.id
        this._employeeService.UpdateEmployee(id,emp).subscribe(e=>{
          console.log(e)
          this._toast.success("Employee Updated Successfully !","Success")
          this.employee.reset();
          this.loadEmployee()
        })
      }
  }

  DeleteEmployee(id){
    event.preventDefault()
   this._employeeService.DeleteEmployee(id).subscribe(e=>{
     console.log(e)
     this._toast.success("Employee Deleted Successfully !","Success")
      this.loadEmployee()
   })
  }
}
