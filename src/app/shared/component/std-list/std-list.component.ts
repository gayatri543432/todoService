import { Component, OnInit } from '@angular/core';
import { StdServiceService } from '../../services/std-service.service';
import { IStudent } from '../../model/student.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StdGetConfirmComponent } from '../std-get-confirm/std-get-confirm.component';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
  stdArr:IStudent[]=[]
  constructor( private _stdService:StdServiceService,
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }

  trackById(index:number,std:IStudent){
    return std.studentId
  }
  getTodos(){
    this._stdService.fetchStudents()
      .subscribe({
        next:res=>{
          this.stdArr=res
        },
        error:err=>{
          console.log(err)
        }
      })
  }

    onEdit(std:IStudent){
      this._stdService.EditStdSub$.next(std)
    }

    onRemove(id:number){
      let config=new MatDialogConfig()
      config.width='500px'
      config.maxWidth='90%'
      config.data=`Are you sure you want to Remove student with Id ${id}?`
      let matDialogRef=this._matDialog.open(StdGetConfirmComponent,config)
      matDialogRef.afterClosed()
        .subscribe(flag=>{
          if(flag){
            this._stdService.onRemoveStd(id)
              
          }
        })
        

    }
}
