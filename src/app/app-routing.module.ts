import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'create', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
