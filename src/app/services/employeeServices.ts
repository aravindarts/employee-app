import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private REST_API_SERVER = "http://localhost:8080";

    constructor(private httpClient: HttpClient){}

    public getEmployeeList(){
      const headers = { 'content-type': 'application/json'}  
      const payload = { "pagination":{
        "pageNumber":0,
        "size":5
    }  }  
      return this.httpClient.post(this.REST_API_SERVER+ "/api/v1/employee/find", payload,{'headers':headers})
    }

    public saveEmployee(payload:any){
      const headers = { 'content-type': 'application/json'}  
      return this.httpClient.post(this.REST_API_SERVER+ "/api/v1/employee/save", payload,{'headers':headers})
    }

}