const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("ul");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);

    taskList.appendChild(taskItem);

    taskInput.value = "";
});