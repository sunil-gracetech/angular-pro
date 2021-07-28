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
  return this.http.post(`${BaseUrl}${Endpint}`,emp)
  }
  DeleteEmployee(id: number) {
    return this.http.delete(`${BaseUrl}${Endpint}/${id}`);
  }
  UpdateEmployee(emp: any) {
    throw new Error('Method not implemented.');
  }

}
