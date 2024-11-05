import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'add-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './app-add-task-component.html',
    styleUrl: './app-add-task-component.css',
})
export class AddTaskComponent {

    task: string = '';
    taskArr: { name: string, isEditing: boolean }[] = [];
    completedArr: string[] = [];

    addTaskHandler() {
        if (this.task.length == 0) {
            return
        }

        this.taskArr.push({ name: this.task, isEditing: false });
        this.task = '';
    }

    completeTaskHandler(index: number) {
        let currentTask = this.taskArr[index].name;
        this.completedArr.push(currentTask);
        this.taskArr.splice(index, 1);
    }

    editTaskHandler(index: number) {
        this.taskArr[index].isEditing = true;
    }

    saveTaskHandler(index: number) {
        this.taskArr[index].isEditing = false;
    }

    deleteTaskHandler(index: number) {
        this.taskArr.splice(index, 1);
    }
}
