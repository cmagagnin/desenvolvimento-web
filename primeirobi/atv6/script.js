const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

addTaskButton.addEventListener('click', addTask);

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

taskList.addEventListener('click', function (e) {
  const li = e.target.closest('li');
  if (li && taskList.contains(li)) {
    taskList.removeChild(li);
  }
});
