// JS/logic.js - Lógica pura (testável)
function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true };
  }
  return { success: false, error: 'Conta não encontrada. Por favor, cadastre-se.' };
}

function signup(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.email === email)) {
    return { success: false, error: 'Este email já está cadastrado.' };
  }
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true, message: 'Cadastro realizado com sucesso!' };
}

function getTasks(userEmail) {
  return JSON.parse(localStorage.getItem(`tasks_${userEmail}`) || '[]');
}

function addTask(userEmail, text) {
  const tasks = getTasks(userEmail);
  tasks.push({ text, completed: false });
  localStorage.setItem(`tasks_${userEmail}`, JSON.stringify(tasks));
  return tasks;
}

function completeTask(userEmail, index) {
  const tasks = getTasks(userEmail);
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem(`tasks_${userEmail}`, JSON.stringify(tasks));
  return tasks;
}

function deleteTask(userEmail, index) {
  const tasks = getTasks(userEmail);
  tasks.splice(index, 1);
  localStorage.setItem(`tasks_${userEmail}`, JSON.stringify(tasks)); // CORRIGIDO: era userEmail
  return tasks;
}

module.exports = { login, signup, getTasks, addTask, completeTask, deleteTask };