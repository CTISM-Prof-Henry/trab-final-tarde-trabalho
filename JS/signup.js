// JS/signup.js - Só DOM, usa lógica de logic.js
const { signup } = require('./logic.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('signup-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      message.textContent = 'Preencha todos os campos.';
      return;
    }

    const result = signup(email, password);

    if (result.success) {
      message.style.color = 'green';
      message.textContent = result.message || 'Cadastro realizado!';
      setTimeout(() => {
        window.location.href = 'index.html'; // Volta pro login
      }, 1000);
    } else {
      message.style.color = 'red';
      message.textContent = result.error;
    }
  });
});