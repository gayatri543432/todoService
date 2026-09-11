import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-std-get-confirm',
  templateUrl: './std-get-confirm.component.html',
  styleUrls: ['./std-get-confirm.component.scss']
})
export class StdGetConfirmComponent implements OnInit {
  msg!:string
  constructor(
    @Inject(MAT_DIALOG_DATA) data:string,
    private _matDialogRef:MatDialogRef<StdGetConfirmComponent>) { 
      this.msg=data
    }

  ngOnInit(): void {
  }
  
  onClose(flag:boolean){
      this._matDialogRef.close(flag)
  }
}
