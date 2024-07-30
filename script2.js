function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSplash = document.getElementById('eyeSplash');
  
    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none'; // Hide the eye icon
        eyeSplash.style.display = 'inline'; // Show the splash icon
    } else {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'inline '; // Show the eye icon
        eyeSplash.style.display = 'none'; // Hide the splash icon
    }
  }    