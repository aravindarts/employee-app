import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { EmployeeService } from '../services/employeeServices';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public employees: Employee[] =[];
  constructor(private employeeService :EmployeeService) { }
  public editEmployee: Employee | undefined;
  public deleteEmployee: Employee | undefined;

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((res:any)=>{
      this.employees= res.data;
      console.log(res);
    })
    console.log("ngOnInit trigger");

  }


}
