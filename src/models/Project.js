export default class Project {
    constructor(title) {
        this.title = title
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task);
        this.sortTasks();
    }

    sortTasks() {
        this.tasks.sort((a, b) => a.timestamp - b.timestamp)
    }
}