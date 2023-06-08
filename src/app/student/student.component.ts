import { Component } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = data.students;

  addStudent(student: any) {
    const newStudent = {
      StudentID: this.students.length + 1,
      ...student
    };
    this.students.push(newStudent);
  }

  editStudent(student: any) {
    // Perform the necessary update logic based on the provided student object
  }

  deleteStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}
