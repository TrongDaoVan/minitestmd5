import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private studentService: StudentService) {
    const student = this.getStudent();
    this.studentForm = new FormGroup({
      id: new FormControl(student.id),
      name: new FormControl(student.name),
      age: new FormControl(student.age),
    })

  }

  ngOnInit(): void {
  }

  getStudent (){
    return this.studentService.getStudent();
  }

  submit(){
    const student = this.studentForm.value;
    this.studentService.updateStudent(student, student.id)
    this.studentForm.reset();
  }

}
