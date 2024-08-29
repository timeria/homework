import TaskList from "./src/task-list.js";
import { delTask, editTask } from "./src/add.js";

const taskList = new TaskList();

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskOutput = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const description = taskInput.value.trim();

  if (description) {
    taskList.addTask(description);
    taskList.renderTasks();
    taskInput.value = "";
  }
});

taskOutput.addEventListener("click", (event) => {
  const taskBtns = event.target.closest(".buttons_task");

  if (!taskBtns) {
    return;
  }

  if (event.target.closest(".del_task")) {
    delTask(event);
  }

  if (event.target.closest(".edit_task")) {
    editTask(event);
  }
});
