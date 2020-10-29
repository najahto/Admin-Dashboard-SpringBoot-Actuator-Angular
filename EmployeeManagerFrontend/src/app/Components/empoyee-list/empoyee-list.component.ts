import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Common/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-empoyee-list',
  templateUrl: './empoyee-list.component.html',
  styleUrls: ['./empoyee-list.component.css']
})
export class EmpoyeeListComponent implements OnInit {
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onOpenModal(employee: Employee, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModel');
    }

    container.appendChild(button);
    button.click();

  }

  onAddEmployee(addForm: NgForm): void {
    const button = document.getElementById("close-employee-form");
    button.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },

    );
  }
  onUpdateEmployee(employee: Employee): void {
    const button = document.getElementById("close-employee-form");
    button.click();
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },

    );
  }
  onDeleteEmployee(id: Number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },

    );
  }

  searchEmployees(keyword: String): void {
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if(results.length === 0 || !keyword ){
      this.getEmployees();
    }
  }
}
