import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo.types';

@Pipe({
  name: 'todo', pure: false
})
export class TodoPipe implements PipeTransform {

  transform(value: Array<TodoItem>, done: boolean): any {
    return value?.length ? value.filter(item => item.checked === done): value;
  }

}
