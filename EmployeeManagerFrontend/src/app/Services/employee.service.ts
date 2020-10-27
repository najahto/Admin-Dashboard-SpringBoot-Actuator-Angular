import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../Common/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/employees';
  
  constructor(private http :HttpClient) { }
 
  public getEmployees():Observable<Employee[]> {
      return this.http.get<Employee[]>(this.baseURL);
  }

  public addEmployee(employee:Employee):Observable<Employee> {
      return this.http.post<Employee>(this.baseURL+"/create",employee);
  }

  public updateEmployee(employee:Employee):Observable<Employee> {
      return this.http.put<Employee>(this.baseURL+"/update",employee);
  }

  public deleteEmployee(id:Number):Observable<void> {
      return this.http.delete<void>(this.baseURL+`/delete/${id}`);
  }

}

