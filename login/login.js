const form = document.forms["google-sheet"]; // Get form by name
const toggleText = document.querySelector(".login-register p"); 
const toggleForm = document.querySelector(".register-link"); 
const formTitle = document.querySelector("h2"); 
const submitButton = document.querySelector(".btn"); 
let isSignup = false; 

// Toggle between Login and Signup
toggleForm.addEventListener("click", function(event) {
    event.preventDefault();
    isSignup = !isSignup; 

    formTitle.innerText = isSignup ? "Sign Up" : "Login";
    submitButton.innerText = isSignup ? "Sign Up" : "Login";
    
    toggleText.innerHTML = isSignup 
        ? 'Already have an account? <a href="#" class="register-link">Login</a>'
        : 'Don\'t have an account? <a href="#" class="register-link">Register</a>';

    // Update event listener for new toggle link
    document.querySelector(".register-link").addEventListener("click", toggleFormHandler);
});

// Handle Form Submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        action: isSignup ? "signup" : "login",
        email: form.email.value, 
        password: form.password.value
    };

    fetch("https://script.google.com/macros/s/AKfycby-qqoNG_DiZCubcI8Bk-jHJZrSv29jm-4VBSc86mHHz-O25bOilO6WMG6BwfKJuLmPzQ/exec", { 
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes("Successful")) {
            window.location.reload(); // Refresh after success
        }
    })
    .catch(error => console.error("Error:", error));

    form.reset(); // Clear form after submission
});

// Function to Handle Toggle Form Clicks
function toggleFormHandler(event) {
    event.preventDefault();
    isSignup = !isSignup; 

    formTitle.innerText = isSignup ? "Sign Up" : "Login";
    submitButton.innerText = isSignup ? "Sign Up" : "Login";

    toggleText.innerHTML = isSignup 
        ? 'Already have an account? <a href="#" class="register-link">Login</a>'
        : 'Don\'t have an account? <a href="#" class="register-link">Register</a>';

    document.querySelector(".register-link").addEventListener("click", toggleFormHandler);
}
