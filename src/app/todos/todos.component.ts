  import {Component, OnInit} from '@angular/core';
  import {TodosService} from '../shared/todos.service';
  import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true
  private searchString: string = ''

  constructor(private todosService: TodosService) {   }

  ngOnInit() {
//    this.todosService.fetchTodos().subscribe(()=>this.loading = false)
    this.todosService.fetchTodos()
      .pipe(delay(500))// <- типа setTimeout!
      .subscribe(()=>this.loading = false)
  }

  onChange(id: number) {
    // this.onToggle.emit(id);
    this.todosService.onToggle(id)
  }
  onDelete(id: number) {
    // this.onToggle.emit(id);
    this.todosService.onRemove(id)
  }

}
