import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './app-add-task-component/app-add-task-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-todo-list';
}
