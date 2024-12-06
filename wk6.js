document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const tasksList = document.getElementById("tasks");
    const error = document.getElementById("error");
    const maxTasks = 10;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
  
      // Input validation
      if (taskText === "") {
        error.textContent = "Please enter a task.";
        return;
      }
  
      // Limit the number of tasks
      if (tasksList.children.length >= maxTasks) {
        error.textContent = `You can only add up to ${maxTasks} tasks.`;
        return;
      }
  
      error.textContent = ""; // Clear error message
      addTask(taskText);
      taskInput.value = ""; // Clear input field
    });
  
    function addTask(taskText) {
      // Create task item
      const taskItem = document.createElement("li");
      taskItem.className = "task";
  
      // Task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskItem.appendChild(taskSpan);
  
      // Checkbox for marking as completed
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.addEventListener("change", () => {
        taskItem.classList.toggle("completed", checkBox.checked);
      });
      taskItem.appendChild(checkBox);
  
      // Cancel button for removing tasks
      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.addEventListener("click", () => {
        tasksList.removeChild(taskItem);
        error.textContent = ""; // Clear error if task count is reduced
      });
      taskItem.appendChild(cancelButton);
  
      // Add task to the list
      tasksList.appendChild(taskItem);
    }
  });
  