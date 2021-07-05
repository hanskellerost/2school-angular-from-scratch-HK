import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { TodoItem } from './todo.types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(private todoService: TodoService) { }

  get todos(): TodoItem[] {
    return this.todoService.items;
  }

  public drop(event: CdkDragDrop<TodoItem[]>) {
    console.log(event.previousContainer.data);
    console.log(event.container.data);
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    if (event.previousContainer !== event.container) {
      if (event.currentIndex >= 0 && this.todos[event.currentIndex]) {
        event.previousContainer.data[event.previousIndex].checked = !event.previousContainer.data[event.previousIndex].checked;
      }
    }
  }
}
