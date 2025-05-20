
// Get the modal
var learnMoreModal = document
    .getElementById("learn-more-modal");
var instructionsModal = document
    .getElementById(
        "instructions-modal");

// Get the button that opens the modal
var learnMoreBtn = document
    .getElementById("learn-more-btn");
var instructionsBtn = document
    .getElementById("instructions-btn");

// Get the <span> element that closes the modal
var closeLearnMore = document
    .getElementsByClassName(
        "close-learn-more")[0];
var closeInstructions =
    document.getElementsByClassName(
        "close-instructions")[0];

// When the user clicks on the button, open the modal
learnMoreBtn.onclick = function() {
    learnMoreModal.style.display =
        "block";
};

instructionsBtn.onclick = function() {
    instructionsModal.style
        .display = "block";
};

// When the user clicks on <span> (x), close the modal
closeLearnMore.onclick = function() {
    learnMoreModal.style.display =
        "none";
};

closeInstructions.onclick = function() {
    instructionsModal.style
        .display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target ==
        learnMoreModal) {
        learnMoreModal.style
            .display = "none";
    } else if (event.target ==
        instructionsModal) {
        instructionsModal.style
            .display = "none";
    }
};