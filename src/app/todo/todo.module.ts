import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TodoService } from "./services/todo.service";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { TodoPipe } from "./todo.pipe";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TodoComponent,
    TodoAddComponent,
    TodoPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    DragDropModule,
    MatSnackBarModule
  ],
  providers: [TodoService],
  bootstrap: []
})
export class TodoModule { }
