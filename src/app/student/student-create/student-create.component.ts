import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl()
  })

  submit(){
    const student = this.studentForm.value;
    this.studentService.saveStudent(student);
    this.studentForm.reset();
  }
}
