// Dark mode functionality
const darkModeToggle = document.getElementById("darkMode");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  darkModeToggle.checked = savedTheme === "dark";
}

// Handle theme toggle
darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const taskList = document.getElementById("taskList");
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${task}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;

    taskList.appendChild(div);
    input.value = "";
  }
}

function toggleTask(checkbox) {
  const taskText = checkbox.nextElementSibling;
  taskText.classList.toggle("completed");
}

function removeTask(button) {
  const todoItem = button.parentElement;
  todoItem.style.opacity = "0";
  todoItem.style.transform = "translateY(-10px)";
  setTimeout(() => todoItem.remove(), 300);
}

// Add event listener for Enter key
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
