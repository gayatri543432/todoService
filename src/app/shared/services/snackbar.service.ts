import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItodoRes } from '../model/todo.interface';
import { stdRes } from '../model/student.interface';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackbar:MatSnackBar) { }

  snackbar(obj:ItodoRes | stdRes){
    this._snackbar.open(obj.msg,'close',{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:3000
    })
  }

}
