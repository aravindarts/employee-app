import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeServices';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] =[];
  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((res:any)=>{
      this.employees= res.data;
      console.log(res);
    })
    console.log("ngOnInit trigger");

  }

}
