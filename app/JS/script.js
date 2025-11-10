document.addEventListener('DOMContentLoaded', () => {
  // Aguarda o carregamento completo do DOM antes de executar o código
  const loginForm = document.getElementById('login-form'); // Seleciona o formulário de login pelo ID
  const emailInput = document.getElementById('email'); // Seleciona o campo de entrada de email
  const passwordInput = document.getElementById('password'); // Seleciona o campo de entrada de senha
  const errorMessage = document.getElementById('error-message'); // Seleciona o elemento para exibir mensagens de erro

  loginForm.addEventListener('submit', (e) => {
    // Adiciona um ouvinte para o evento de submissão do formulário
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    const email = emailInput.value.trim(); // Captura o email e remove espaços em branco
    const password = passwordInput.value.trim(); // Captura a senha e remove espaços em branco

    // Carrega a lista de usuários registrados do LocalStorage (ou um array vazio se não houver)
    const users = JSON.parse(localStorage.getItem('users')) || [];
        
    // Verifica se existe um usuário com o email e a senha fornecidos
    const user = users.find(u => u.email === email && u.password === password);
        
    if (user) {
      // Se o usuário for encontrado, o login é bem-sucedido
      errorMessage.textContent = ''; // Limpa qualquer mensagem de erro anterior
      localStorage.setItem('currentUser', JSON.stringify(user)); // Salva o usuário logado no LocalStorage para uso em outras páginas
      window.location.href = '../HTML/tasks.html'; // Redireciona para a página de tarefas, ajustando o caminho para a pasta HTML
    } else {
      // Se o usuário não for encontrado, exibe uma mensagem de erro
      errorMessage.textContent = 'Conta não encontrada. Por favor, cadastre-se.';
    }
  });
});