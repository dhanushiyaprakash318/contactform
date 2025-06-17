document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = todoInput.value.trim();

    if (task === "") {
      // Optionally you can show an inline error or alert here
      alert("Please enter a task");
      return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×"; // Cross symbol
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";
  });
});