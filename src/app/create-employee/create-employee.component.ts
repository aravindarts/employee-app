import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employeeServices';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empCreateFormGrp: FormGroup;
  isSubmited:boolean;
  constructor(private fb: FormBuilder,private employeeService:EmployeeService,private router: Router) {

   }

  ngOnInit(): void {
    this.isSubmited =false
    this.empCreateFormGrp = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      age: ['',[Validators.required]],
      city:['Chennai',[Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  onSave() {
    this.isSubmited =true;
    if(this.empCreateFormGrp.valid){
      this.employeeService.saveEmployee(this.empCreateFormGrp.value).subscribe((res:any) =>{
        console.log(res);
        if(res.status=="success"){
          this.router.navigate(['/employee-list']);
          this.isSubmited =false;
        }
      });
    }
    console.log('end');
    
  }
  onUpdate() {
    // TODO: Use EventEmitter with form value
    console.log(this.empCreateFormGrp.value);
  }

}
