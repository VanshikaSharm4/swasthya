function sendMail(event) {
    event.preventDefault(); // Stop form submission (important!)

    console.log("sendMail function triggered!"); // Debugging check

    Swal.fire({
        icon: "info",
        title: "Sending...",
        text: "Your feedback is being sent!",
        showConfirmButton: false,
        timer: 1500
    });

    let parms = {
        name: document.getElementById('user-name').value,
        // email: document.getElementById('email').value,
        feedback: document.getElementById('feedback').value
    };

    console.log("Parameters:", parms); // Debugging check

    emailjs.send("service_x87m34k", "template_quqo4hh", parms)
        .then((response) => {
            console.log("EmailJS Response:", response); // Debugging check
            Swal.fire({
                icon: "success",
                title: "Thank you!",
                text: "Your feedback has been sent successfully!",
                confirmButtonText: "OK"
            }).then(() => {
                window.location.href = "./quiz-results.html"; // Redirect
            });
        })
        .catch((error) => {
            console.error("Email failed to send:", error);
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to send email. Please try again.",
                confirmButtonText: "OK"
            });
        });
}

// Attach event listener to form submission
document.getElementById("signup-form").addEventListener("submit", sendMail);

document.getElementById("results-btn")
    .addEventListener("click",
        function() {
            window.location =
                "./quiz-results.html";
        });