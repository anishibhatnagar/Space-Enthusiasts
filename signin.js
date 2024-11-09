document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById('sign-in-form');
  const signUpForm = document.getElementById('sign-up-form');
  const switchToSignup = document.getElementById('switch-to-signup');
  const switchToSignin = document.getElementById('switch-to-signin');

  // Show sign up form
  switchToSignup.addEventListener('click', () => {
      signInForm.classList.add('hidden');
      signUpForm.classList.remove('hidden');
  });

  // Show sign in form
  switchToSignin.addEventListener('click', () => {
      signUpForm.classList.add('hidden');
      signInForm.classList.remove('hidden');
  });

  // Sign Up logic
  signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      
      // Save user to local storage
      localStorage.setItem(username, password);
      alert('Account created successfully! You can now sign in.');
      signUpForm.reset();
      signUpForm.classList.add('hidden');
      signInForm.classList.remove('hidden');
  });

  // Sign In logic
  signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      // Validate user credentials
      const storedPassword = localStorage.getItem(username);
      if (storedPassword && storedPassword === password) {
          alert('Login successful!');
          // Redirect or perform another action
      } else {
          alert('Invalid username or password.');
      }
  });
});
