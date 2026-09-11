import { Injectable } from '@angular/core';
import { ITodo, ItodoRes } from '../model/todo.interface';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

todosArr: ITodo[] = [
  {
    todoId: 1,
    todoName: 'Learn Angular',
    status: true
  },
  {
    todoId: 2,
    todoName: 'Practice TypeScript',
    status: false
  },
  {
    todoId: 3,
    todoName: 'Learn RxJS',
    status: true
  },
  {
    todoId: 4,
    todoName: 'Practice Forms',
    status: false
  },
  {
    todoId: 5,
    todoName: 'Prepare for Interview',
    status: false
  }
];

  editTodoSub$:Subject<ITodo>=new Subject<ITodo>()
  constructor() { }

  fetchTodos():Observable<ITodo[]>{
    return of(this.todosArr)
  }

  onAdd(todo:ITodo):Observable<ItodoRes>{
    this.todosArr.unshift(todo)
    return of({
      todoItem:todo,
      msg:`New todo Item with Id ${todo.todoId} added Successfully!!`
    })
  }

  onRemove(id:number){
    let getIndex=this.todosArr.findIndex(t=>t.todoId === id)
    let removeTodo= this.todosArr.splice(getIndex,1)
    return of({
      todoItem:removeTodo[0],
      msg:`Todo Item with Id ${removeTodo[0].todoId} Remove Successfully!!`
    })
  }

  updateTodo(todo:ITodo):Observable<ItodoRes>{
    let getIndex = this.todosArr.findIndex(t=>t.todoId === todo.todoId)
    this.todosArr[getIndex]=todo

    return of({
      todoItem:todo,
      msg:`Todo Item with Id ${todo.todoId} Updated Successfully!!`
    })

  }
}
