import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: 'Купитль  хлеб', completed: false, date: new Date() },
    {id: 2, title: 'Купитль  пивко', completed: true, date: new Date() },
    {id: 3, title: 'Купитль  дошик', completed: false, date: new Date() },
  ]

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this
          .http
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=12')
          .pipe(tap(todos=>this.todos=todos))
  }

  onToggle(id: number) {
    console.log(id)
    const findedId = this.todos.findIndex(e=>e.id==id)
    this.todos[findedId].completed = !this.todos[findedId].completed
  }
  onRemove(id: number) {
    console.log(id)
    const findedId = this.todos.findIndex(e=>e.id==id)
    this.todos.splice(findedId,1)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

}
