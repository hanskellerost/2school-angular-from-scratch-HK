import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PendingChangesGuard } from "./services/pending-changes.guard";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoComponent } from "./todo.component";

export const todoRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent, canDeactivate: [PendingChangesGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
