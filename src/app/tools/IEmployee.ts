export interface IEmployee{
    GetAllEmployees();
    CreateEmployee(emp:any);
    DeleteEmployee(id:number);
    UpdateEmployee(id:number,emp:any);
}