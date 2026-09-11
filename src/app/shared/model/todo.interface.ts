export interface ITodo {
  todoId: number;
  todoName: string;
  status: boolean;
}

export interface ItodoRes{
  todoItem:ITodo,
  msg:string
}