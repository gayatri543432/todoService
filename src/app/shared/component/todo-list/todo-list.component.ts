import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../model/todo.interface';
import { SnackbarService } from '../../services/snackbar.service';
import {  MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr:ITodo[]=[]
  constructor( private _todoService : TodoService,
    private _snackBarRes:SnackbarService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos(){
    this._todoService.fetchTodos()
      .subscribe({
        next:res=>{
          this.todosArr=res
        },
        error:err=>{
          console.log(err)
        }
      })
  }

  onRemove(id:number){
    let config=new MatDialogConfig()
    config.data = `Are you sure you want to delete this todo with Id ${id}?`;
    config.width='500px'
    let matRef=this._matDialog.open(GetConfirmComponent,config)
    matRef.afterClosed()
      .subscribe(flag =>{
        if(flag){
          this._todoService.onRemove(id)
            .subscribe({
              next:res=>{
              this._snackBarRes.snackbar(res)
            },
            error:err=>{
                console.log(err)
            }
          })
        }
      })
  }

  onEdit(todo:ITodo){
    this._todoService.editTodoSub$.next(todo)
  }

}
