import { Component, OnInit, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { StdServiceService } from '../../services/std-service.service';
import { SnackbarService } from '../../services/snackbar.service';
import { IStudent } from '../../model/student.interface';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  EditObj!:IStudent
  isInEditMode:boolean=false
  @ViewChild('stdForm') stdForm!:NgForm
  constructor( private _stdService:StdServiceService,
                private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.onTodoEdit()
  }

  onTodoEdit(){
    this._stdService.EditStdSub$
      .subscribe({
        next:res=>{
          this.EditObj=res
          this.isInEditMode=true
          this.stdForm.form.patchValue(res)
        }
      })
  }

  onSubmit(){
    if(this.stdForm.valid){
      let newobj:IStudent={
        ...this.stdForm.form.value,
        studentId:Date.now()
      }
      this._stdService.onAdd(newobj)
        .subscribe({
          next:res=>{
           this._snackbar.snackbar(res)
           this.stdForm.reset()
          },
          error:err=>{
            alert(err)
          }
        })

    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updateObj={
        ...this.stdForm.form.value,
        studentId:this.EditObj.studentId
      }

      this._stdService.onstdUpdate(updateObj)
        .subscribe({
          next:res=>{
            this.isInEditMode=false
            this.stdForm.reset()
            this._snackbar.snackbar(res)
          },
          error:err=>{
            this._snackbar.snackbar(err)

          }
        })
    }
  }
}

