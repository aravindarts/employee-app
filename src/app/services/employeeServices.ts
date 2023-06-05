import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private REST_API_SERVER = "http://localhost:8080";

    constructor(private httpClient: HttpClient){}

    public getEmployeeList(){
      return this.httpClient.get(this.REST_API_SERVER+"/api/v1/employee/findAll")
    }

}