// app/JS/logic.js

// USUÁRIO PRÉ-DEFINIDO
const USUARIO_VALIDO = {
    email: "isa@ctism.com",
    password: "123456"
};

// 1. FUNÇÃO DE LOGIN (só aceita o usuário fixo)
function login(email, password) {
    // Verifica se o email e senha batem com o usuário pré-definido
    if (email === USUARIO_VALIDO.email && password === USUARIO_VALIDO.password) {
        // Salva o usuário como "logado" no localStorage
        localStorage.setItem('currentUser', JSON.stringify({ email: USUARIO_VALIDO.email }));
        return { success: true };                       // Login OK
    }
    // Qualquer outro usuário → erro
    return {
        success: false,
        error: 'Usuário ou senha incorretos.'
    };
}

// 2. PEGAR AS TAREFAS DO USUÁRIO
function getTasks(email) {
    // Busca as tarefas salvas com a chave "tasks_isa@ctism.com"
    return JSON.parse(localStorage.getItem(`tasks_${email}`) || '[]');
}

// 3. ADICIONAR NOVA TAREFA
function addTask(email, text) {
    const tasks = getTasks(email);
    // Adiciona nova tarefa (não concluída)
    tasks.push({ text: text.trim(), completed: false });
    localStorage.setItem(`tasks_${email}`, JSON.stringify(tasks));
}

// 4. MARCAR/DESMARCAR COMO CONCLUÍDA
function toggleTask(email, index) {
    const tasks = getTasks(email);
    // Inverte o estado da tarefa (concluída ↔ não concluída)
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(`tasks_${email}`, JSON.stringify(tasks));
}

// 5. EXCLUIR TAREFA
function deleteTask(email, index) {
    const tasks = getTasks(email);
    // Remove a tarefa do array
    tasks.splice(index, 1);
    localStorage.setItem(`tasks_${email}`, JSON.stringify(tasks));
}