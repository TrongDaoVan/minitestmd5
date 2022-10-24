import { Injectable } from '@angular/core';
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
students: Student[] = [
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
  return this.students
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
  this.students.push(student);
  }

  updateStudent(student: any, id: number){
    for (let i = 0; i < this.students.length; i++) {
    if(this.students[i].id == student.id) {
      this.students[i] = student;
    }
    }
  }

  removeStudent (student: any) {
  const index = this.students.indexOf(student)
    console.log("hello")
    console.log(index)
    this.students.splice(index,1)
  }

  constructor() { }
}
