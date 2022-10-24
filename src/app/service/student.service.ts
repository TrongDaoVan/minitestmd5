import { Injectable } from '@angular/core';
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
Students: Student[] = [
  {
    id:1,
    name: 'Trong',
    age: 23
  },
  {
    id:2,
    name:'Hien',
    age: 24
  },
  {
    id:3,
    name:'Quang Anh',
    age: 24
  }
]

  // hien tat ca
  getAll(){
  return this.Students
  }

  // nhan du lieu
  student: Student = {

  }

  getStudent(){
  return this.student;
  }

  findStudent(pr:any) {
  return this.student = pr;
  }

  saveStudent(student: any) {
  this.Students.push(student);
  }

  updateStudent(student: any, id: number){
    for (let i = 0; i < this.Students.length; i++) {
    if(this.Students[i].id == student.id) {
      this.Students[i] = student;
    }
    }
  }

  removeStudent (student: any) {
  const index = this.Students.indexOf(student)
    this.Students.slice(index,1)
  }

  constructor() { }
}
