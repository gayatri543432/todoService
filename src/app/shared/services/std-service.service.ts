import { Injectable } from '@angular/core';
import { IStudent, stdRes } from '../model/student.interface';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdServiceService {

  
studentArr: Array<IStudent> = [
  {
    studentId: 1,
    studentName: 'Rahul',
    age: 21,
    city: 'Pune',
    course: 'Angular',
    marks: 85,
    isActive: true
  },
  {
    studentId: 2,
    studentName: 'Priya',
    age: 22,
    city: 'Mumbai',
    course: 'Java',
    marks: 78,
    isActive: true
  },
  {
    studentId: 3,
    studentName: 'Amit',
    age: 20,
    city: 'Nashik',
    course: 'Python',
    marks: 92,
    isActive: false
  },
  {
    studentId: 4,
    studentName: 'Sneha',
    age: 23,
    city: 'Pune',
    course: 'React',
    marks: 74,
    isActive: true
  },
  {
    studentId: 5,
    studentName: 'Vishal',
    age: 21,
    city: 'Nagpur',
    course: 'Angular',
    marks: 88,
    isActive: true
  },
  {
    studentId: 6,
    studentName: 'Neha',
    age: 22,
    city: 'Aurangabad',
    course: 'Python',
    marks: 69,
    isActive: false
  }
];

  EditStdSub$: Subject<IStudent> = new Subject<IStudent>();
  constructor() { }

  fetchStudents():Observable<IStudent[]>{
    return of(this.studentArr)
  }

  onAdd(std:IStudent):Observable<stdRes>{
    this.studentArr.unshift(std)
    return of({
      stdObj:std,
      msg: `New student with Id ${std.studentId} Added successfully!!`
  })
  }

  onstdUpdate(std:IStudent):Observable<stdRes>{

    let getIndex=this.studentArr.findIndex(std=>std.studentId === std.studentId)
    this.studentArr[getIndex]=std;

    return of({
        stdObj:std,
        msg: `The student with Id ${std.studentId} Updated successfully!!`
    })

  }

  onRemoveStd(id:number){
    let getIndex=this.studentArr.findIndex(std=>std.studentId === id)
    this.studentArr.splice(getIndex,1)

  }
}
