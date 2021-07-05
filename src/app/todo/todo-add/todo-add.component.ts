import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo/services/todo.service';
import { TodoItem } from '../todo.types';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  @Input() currentMaxId: number | undefined;
  @Output() public added = new EventEmitter<TodoItem>();

  public newTodoForm: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {
    this.newTodoForm = new FormGroup({
      description: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
  }

  public onAdd(form: FormGroupDirective) {
    if(this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoService.items.push({
        id: this.currentMaxId ?? 9999,
        description: this.newTodoForm.value.description,
        checked: false
      })

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
      this.router.navigate(['/todo']);
    }
  }
}
