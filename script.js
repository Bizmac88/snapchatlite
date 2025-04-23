// Show splash screen and move to login screen after delay


const auth = firebase.auth();

async function registerUser(email, password) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await user.sendEmailVerification();
    alert("Verification email sent! Check your inbox.");
  } catch (error) {
    alert(error.message);
  }
}

async function handleSignUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const userCredential = await window.createUserWithEmailAndPassword(window.auth, email, password);
    const user = userCredential.user;

    await window.sendEmailVerification(user);
    alert("✅ Verification email sent to " + email);
  } catch (error) {
    console.error("Signup error:", error);
    alert("❌ " + error.message);
  }
}

// Start the camera stream when button is clicked
function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      const video = document.getElementById('camera-stream');
      video.srcObject = stream;
    })
    .catch(err => {
      document.getElementById('snap-message').textContent = 'Camera access denied or not supported.';
      console.error('Camera access error:', err);
    });
}

// Trigger the camera to start on Snap button click
document.querySelector('.snap-btn').addEventListener('click', startCamera);

// Snap button functionality placeholder
function captureSnap() {
  alert('Snap feature not implemented yet.');
}

// Start camera only after user clicks (avoids auto-play issues)
window.addEventListener('DOMContentLoaded', () => {
  // Optionally, you can also call startCamera() here if you want the camera to start as soon as the page loads.
  console.log('Camera ready to start on button click');
});




window.onload = function () {
    setTimeout(() => {
      document.getElementById("splash-screen").classList.remove("active");
      document.getElementById("login-screen").classList.add("active");
    }, 2000); // Splash screen duration
  };
  
  // Navigation between login and signup screens
  function showSignup() {
    document.getElementById("login-screen").classList.remove("active");
    document.getElementById("signup-screen").classList.add("active");
  }

  function captureSnap() {
    document.getElementById("snap-message").textContent = "Snap Captured!";
  }
  
  function showLogin() {
    hideAll();
    document.getElementById("login-screen").classList.add("active");
  }
  
  // Forgot Password navigation
  function showForgotPassword() {
    hideAll();
    document.getElementById("forgot-password-screen").classList.add("active");
  }
  
  function backToLoginFromForgot() {
    hideAll();
    document.getElementById("login-screen").classList.add("active");
  }
  
  // Common function to hide all screens
  function hideAll() {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
  }
  
  // Navigate to home screen
  function goToHome() {
    hideAll();
    document.getElementById("home-screen").classList.add("active");
  }
  
    
  // Navigate to chat screen
  function goToChat() {
    hideAll();
    document.getElementById("chat-screen").classList.add("active");
  }
  
  // Navigate to story screen
  function goToStories() {
    hideAll();
    document.getElementById("story-screen").classList.add("active");
  }
  
  // Navigate to add friend screen
  function goToAddFriends() {
    hideAll();
    document.getElementById("add-friend-screen").classList.add("active");
  }
  
  // Logout to login screen
  function logout() {
    hideAll();
    document.getElementById("login-screen").classList.add("active");
  }

  
  
