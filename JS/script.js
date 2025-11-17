// JS/script.js - Event listeners (DOM) - usa a lógica de logic.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = require('./logic.js').login(emailInput.value.trim(), passwordInput.value.trim());
    if (result.success) {
      errorMessage.textContent = '';
      window.location.href = 'tasks.html';
    } else {
      errorMessage.textContent = result.error;
    }
  });
});
