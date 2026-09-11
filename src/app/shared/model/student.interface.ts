export interface IStudent {
  studentId: number;
  studentName: string;
  age: number;
  city: string;
  course: string;
  marks: number;
  isActive: boolean;
}

export interface stdRes{
  stdObj:IStudent,
  msg:string
}