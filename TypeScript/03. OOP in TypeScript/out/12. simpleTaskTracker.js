"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.description ? "Completed" : "Pending"}`;
    }
    static createSampleTasks() {
        return [
            new Task("Complete homework", "Finish math exercises", "Charlie"),
            new Task("Clean room", "Clean the room", "Mary")
        ];
    }
}
// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// console.log(task1.createdBy);
// task1.toggleStatus();
// console.log(task1.getDetails());
// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12.%20simpleTaskTracker.js.map