function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'Oluwapelumi' && password === 'Iloveyou') {
      document.getElementById('login-container').classList.add('hidden');
      const messageContainer = document.getElementById('birthday-message');
      messageContainer.classList.remove('hidden');
      
      // Add class for transition effect
      messageContainer.querySelectorAll('.transition').forEach(img => {
        img.style.transform = 'scale(1.2)';
      });
  
      // Change the background gradient
      setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
      }, 1000);
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  }