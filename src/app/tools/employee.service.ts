import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl, Endpint } from '../uitls/ApirRoute';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements IEmployee {

  constructor(private http:HttpClient) { }
  GetAllEmployees() {
    return this.http.get(`${BaseUrl}${Endpint}`)
  }
  CreateEmployee(emp: any) {
    throw new Error('Method not implemented.');
  }
  DeleteEmployee(id: number) {
    throw new Error('Method not implemented.');
  }
  UpdateEmployee(emp: any) {
    throw new Error('Method not implemented.');
  }

}
