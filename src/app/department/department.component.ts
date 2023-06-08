import { Component } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments = data.departments;

  addDepartment(departmentName: string) {
    const newDepartment = {
      DepartmentID: this.departments.length + 1,
      DepartmentName: departmentName
    };
    this.departments.push(newDepartment);
  }

  editDepartment(department: any) {
    const index = this.departments.findIndex((d: any) => d.DepartmentID === department.DepartmentID);
    if (index !== -1) {
      this.departments[index].DepartmentName = 'Edit Text';
    }
  }
  

  deleteDepartment(department: any) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }
}
