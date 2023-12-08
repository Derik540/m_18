function addTask() {
  const inputText = document.getElementById("input-text");

  const taskList = document.getElementById("task-list");
  const listItem = document.createElement("li");
  listItem.textContent = inputText.value;
  taskList.appendChild(listItem);
  inputText.value = "";
}
