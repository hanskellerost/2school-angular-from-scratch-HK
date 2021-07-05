import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TodoAddComponent } from '../todo-add/todo-add.component';


@Injectable({providedIn: 'root'})
export class PendingChangesGuard implements CanDeactivate<TodoAddComponent> {
  constructor(private snackbar: MatSnackBar) {}

  canDeactivate(
    component: TodoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (component.newTodoForm.dirty) {
      this.snackbar.open('Änderungen müssen zuerst gespeichert werden', undefined, {
        duration: 2000,
      });
    }

    return !component.newTodoForm.dirty;
  }
}
