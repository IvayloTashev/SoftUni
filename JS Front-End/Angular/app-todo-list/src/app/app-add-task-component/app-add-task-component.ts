import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component ({
selector: 'add-task',
standalone: true,
imports: [FormsModule],
templateUrl: './app-add-task-component.html',
styleUrl: './app-add-task-component.css',
})
export class AddTaskComponent {

    task: string = '';

    addTaskHandler(): void {
        console.log(this.task);
        this.task = '';
    }
    
}
