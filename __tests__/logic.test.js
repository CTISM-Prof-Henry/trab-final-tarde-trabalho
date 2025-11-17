// __tests__/logic.test.js
const { login, signup, addTask, completeTask, deleteTask } = require('../JS/logic.js');

describe('Lógica do Organizador de Tarefas', () => {
  beforeEach(() => localStorage.clear());

  test('Login com credenciais válidas', () => {
    localStorage.setItem('users', JSON.stringify([{ email: 'user@test.com', password: '123' }]));
    const result = login('user@test.com', '123');
    expect(result.success).toBe(true);
    expect(JSON.parse(localStorage.getItem('currentUser')).email).toBe('user@test.com');
  });

  test('Login com credenciais inválidas', () => {
    localStorage.setItem('users', JSON.stringify([{ email: 'user@test.com', password: '123' }]));
    const result = login('errado@test.com', '000');
    expect(result.success).toBe(false);
    expect(result.error).toBe('Conta não encontrada. Por favor, cadastre-se.');
  });

  test('Cadastro de novo usuário', () => {
    const result = signup('novo@test.com', '456');
    expect(result.success).toBe(true);
    const users = JSON.parse(localStorage.getItem('users'));
    expect(users).toContainEqual({ email: 'novo@test.com', password: '456' });
  });

  test('Adicionar tarefa', () => {
    localStorage.setItem('currentUser', JSON.stringify({ email: 'user@test.com' }));
    const tasks = addTask('user@test.com', 'Nova tarefa');
    expect(tasks).toHaveLength(1);
    expect(tasks[0].text).toBe('Nova tarefa');
  });

  test('Marcar tarefa como concluída', () => {
    localStorage.setItem('currentUser', JSON.stringify({ email: 'user@test.com' }));
    localStorage.setItem('tasks_user@test.com', JSON.stringify([{ text: 'Tarefa 1', completed: false }]));
    completeTask('user@test.com', 0);
    const tasks = JSON.parse(localStorage.getItem('tasks_user@test.com'));
    expect(tasks[0].completed).toBe(true);
  });

  test('Deletar tarefa', () => {
    localStorage.setItem('currentUser', JSON.stringify({ email: 'user@test.com' }));
    localStorage.setItem('tasks_user@test.com', JSON.stringify([{ text: 'Tarefa 1', completed: false }]));
    deleteTask('user@test.com', 0);
    const tasks = JSON.parse(localStorage.getItem('tasks_user@test.com'));
    expect(tasks).toHaveLength(0);
  });

});
