document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert('Invalid email or password.');
      return;
    }

    window.location.href = 'app1.html';
  });
});
