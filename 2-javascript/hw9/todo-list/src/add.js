function delTask(event) {
  event.target.closest("li").remove();
}

function editTask(event) {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");
  const listItem = event.target.closest("li");

  const text = listItem.querySelector(".task_descr");
  taskInput.value = text.textContent;
  addTaskButton.textContent = "Сохранить";
}

export { delTask, editTask };
