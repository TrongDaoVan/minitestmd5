import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
students: Student[] = []

  constructor(private studentService: StudentService) {
  this.getAllStudents()
  }

  ngOnInit() {
  }

  getAllStudents() {
  this.students = this.studentService.getAll()
  }

  removeStudent(student: any) {
  console.log("xoa")
  console.log("student")
    this.studentService.removeStudent(student);
  }

  findStudent(student: any){
  console.log(student)
    return this.studentService.findStudent(student);
  }
}
