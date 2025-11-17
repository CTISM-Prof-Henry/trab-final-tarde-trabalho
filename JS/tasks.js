// JS/tasks.js - Só DOM, usa lógica de logic.js
const { getTasks, addTask, completeTask, deleteTask } = require('./logic.js');

document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    window.location.href = 'index.html';
    return;
  }

  const userEmail = currentUser.email;
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Carrega tarefas
  function loadTasks() {
    taskList.innerHTML = '';
    const tasks = getTasks(userEmail);

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span style="${task.completed ? 'text-decoration: line-through;' : ''}">
          ${task.text}
        </span>
        <button class="complete-btn" data-index="${index}">
          ${task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button class="delete-btn" data-index="${index}">Excluir</button>
      `;
      taskList.appendChild(li);
    });
  }

  // Adiciona tarefa
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
      addTask(userEmail, text);
      taskInput.value = '';
      loadTasks();
    }
  });

  // Botões de concluir/excluir
  taskList.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('complete-btn')) {
      completeTask(userEmail, index);
      loadTasks();
    } else if (e.target.classList.contains('delete-btn')) {
      deleteTask(userEmail, index);
      loadTasks();
    }
  });

  // Carrega ao iniciar
  loadTasks();
});