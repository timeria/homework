import Task from "./task.js";

const isEditTask = false;

export default class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = new Task(description);
    this.tasks.push(task);
    if (isEditTask) {
    }
  }

  renderTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.textContent = "";

    this.tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input class="task_input" type="checkbox" ${
          task.completed ? "checked" : ""
        }>
        <span class="task_descr">${task.description}</span>
        <div class="buttons_task">
        <button type="button" class="edit_task">Изменить</button>
        <button type="button" class="del_task">Удалить</button>
        </div>
      `;

      listItem.querySelector("input").addEventListener("change", () => {
        task.toggle();
        this.renderTasks();
      });
      taskListElement.appendChild(listItem);
    });
  }
}
