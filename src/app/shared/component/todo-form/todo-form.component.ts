import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from '../../model/todo.interface';
import { TodoService } from '../../services/todo.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  editObj!:ITodo
  isInEditMode:boolean=false
  @ViewChild('todoForm') todoForm!: NgForm;
  constructor( private _todoService:TodoService,
    private _snackbarMsg:SnackbarService

  ) { }

  ngOnInit(): void {
      this._todoService.editTodoSub$
        .subscribe(todo=>{
          if(todo){
            this.isInEditMode=true;
            this.editObj=todo
            this.todoForm.form.patchValue(todo)
          }
        })
  }

  onSubmit(){
    if(this.todoForm.valid){
       let newObj={
        ...this.todoForm.form.value,
        todoId:Date.now()
       }
       this._todoService.onAdd(newObj)
          .subscribe({
            next:res=>{
              this._snackbarMsg.snackbar(res)
               this.todoForm.reset()
            },
            error:err=>{
              console.log(err)
            }
          })
     

    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let updateObj={
        ...this.todoForm.form.value,
        todoId:this.editObj.todoId
      }
      this._todoService.updateTodo(updateObj)
        .subscribe({
          next:res=>{
            this._snackbarMsg.snackbar(res)
            this.isInEditMode=false
            this.todoForm.reset()
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }

}
