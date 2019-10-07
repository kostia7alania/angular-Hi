import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = ''

  constructor(private todoService: TodosService) { }

  ngOnInit() {
  }

  addTodo() {

    console.log(123)
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.todoService.addTodo(todo)

    this.title = ''

  }
}
