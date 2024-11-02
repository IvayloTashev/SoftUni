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
    taskArr: string[] = [];

    addTaskHandler() {
        this.taskArr.push(this.task);
        console.log(this.taskArr);
        this.task = '';
    }
    
}
