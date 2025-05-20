
const quizQuestions = [{
    question: "How would you describe your body frame?",
    answers: {
        v: "Slim; it is difficult for me to gain weight",
        p: "Medium built, symmetrical and with good muscle development",
        k: "Large, heavy; weight is gained easily and difficult to lose",
    }

},

{
    question: "Skin:",
    answers: {
        v: "Dry, thin skin (veins easily visible); Cool, dark circles under eyes; Tans easily; Scanty perspiration.",
        p: "Reddish and sensitive skin; Susceptible to wrinkles, moles, freckles, rashes, flushes, sunburn, occasional spots; Sweats easily",
        k: "Well moist, smooth skin with few wrinkles; Prone to blackheads; Tends to tan; Profuse perspiration.",
    }

},

{
    question: "Nails:",
    answers: {
        v: "Dry, they break easily",
        p: "Shiny, pinkish, smooth",
        k: "Strong, thick, well-defined moons",
    }

},

{
    question: "Hair:",
    answers: {
        v: "Dry and brittle; sometimes falls out easily",
        p: "Fine, straight hair; a tendency to premature graying",
        k: "Soft, thick, lustrous and abundant",
    }

},

{
    question: "Face:",
    answers: {
        v: "Angular/thin/long",
        p: "Heart shape",
        k: "Rounder face",
    }

},

{
    question: "Eyes:",
    answers: {
        v: "Sunken, small, dark eyes, move a lot, sparse lashes",
        p: "Medium size, Grey, green or light brown eyes, sharp steady gaze",
        k: "Long lashes, large, calm, loving eyes",
    }

},

{
    question: "Teeth:",
    answers: {
        v: "Irregular teeth, thin gums",
        p: "Medium teeth, gums bleed easily; Cavities tendency",
        k: "Large, strong, straight white teeth, healthy pink gums",
    }

},

{
    question: "Digestion:",
    answers: {
        v: "Gas, irregular digestion, sensitive stomach",
        p: "Steady, strong digestion",
        k: "Slow, heavy digestion; feel sleepy after eating",
    }

},

{
    question: "Body temperature:",
    answers: {
        v: "Hands and feet are usually cold; warm environment preference",
        p: "Warm extremities with good circulation; Prefer cooler environments.",
        k: "Body is cold and adaptable to most temperatures",
    }

},

{
    question: "Thirst:",
    answers: {
        v: "Irregular thirst",
        p: "Strong, frequent thirst",
        k: "Rarely thirsty",
    }

},

{
    question: "Appetite",
    answers: {
        v: "Irregular, small appetite; Often forgets to eat",
        p: "Robust, healthy appetite; Rarely misses a meal and can become 'hangry'",
        k: "Steady, moderate appetite; Emotional eating; Tends to eat large amounts even when not hungry",
    }

},

{
    question: "Speech:",
    answers: {
        v: "Talks quickly",
        p: "Sharp, precise language, convincing",
        k: "Slow, monotonous speech",
    }

},

{
    question: "Sleep pattern:",
    answers: {
        v: "Doesn't fall asleep easily and makes up often in the night; Light sleep",
        p: "Moderately sound sleeper and wakes up energetic in the morning",
        k: "Deep, long sleep; Struggles to wake up.",
    }

},

{
    question: "Personality:",
    answers: {
        v: "Extroverted, easily excited, creative, imaginative, enthusiastic, Indecisive, changeable, lacking constancy, worried, timid.",
        p: "Intelligent, powerful, clear, focused, short tempered, aggressive, competitive, workaholic, ambitious, conversationalist, precise, courageous, passionate, protective, dynamic energy, emotional",
        k: "Caring, calm, patient, loyal, easy going, fun, loving, slower moving",
    }

},

{
    question: "Memory and concentration:",
    answers: {
        v: "Active mind; good short-term memory but easily forgets",
        p: "Good medium -term memory but accurate",
        k: "Good long-term memory; Takes longer to learn but never forgets",
    }

},

{
    question: "Routine:",
    answers: {
        v: "Irregular schedule and eating times, disorganised",
        p: "Long working day, organised, logical and methodical",
        k: "Good at keeping routine, untidy, organised chaos",
    }

},

{
    question: "Challenges when stressed:",
    answers: {
        v: "Anxiety, fear, uncertainty, fatigue, spaced out, lack of focus, difficulty falling asleep",
        p: "Anger, defensive, controlling, overheated, prone to rashes and acne, interrupted sleep, loose bowel movements, irritable, overly competitive, judgmental, critical, sarcastic, egotistical",
        k: "Cool, calm and collected, weight gain, slow digestion, sinus and respiratory problems, lethargic, difficulty waking up, food cravings, feeling of depression",
    }

},

{
    question: "Emotions:",
    answers: {
        v: "Anxious, fearful, uncertain, too many choices confuse me",
        p: "I am ambitious and like to make plans: I can get irritated when interrupted",
        k: "I am calm, I like solitude and I am peace-loving",
    }

},
];


//Variables for accessing and manipulating the DOM
let currentQuestionCounter = document
.getElementById('current-question');
let questionText = document
.getElementById('question-text');
let vataAnswer = document
.getElementById('vata-option');
let pittaAnswer = document
.getElementById('pitta-option');
let kaphaAnswer = document
.getElementById('kapha-option');
let nextButton = document
.getElementById('btn-next');

let buttons = document
.getElementsByTagName("button");

// QUIZ FUNCTIONALITY

// Starting conditions
let currentQuestion = 0;
let i = 0;
let vataPoints = 0;
let pittaPoints = 0;
let kaphaPoints = 0;
let dosha;

//When the DOM is loaded, display the first question
document.addEventListener(
"DOMContentLoaded",
function() {

    displayQuestions();
});


//Add event listeners to the answer option buttons
for (let button of buttons) {
button.addEventListener("click",
    function() {
        //Add class for selected answer when user clicks on one of the answers
        if (this.getAttribute(
                "id") ===
            "vata-option") {
            vataAnswer.classList
                .add(
                    "selected-answer"
                    );
            //If the user changes answer, deselect the previous ones
            pittaAnswer
                .classList
                .remove(
                    "selected-answer"
                    );
            kaphaAnswer
                .classList
                .remove(
                    "selected-answer"
                    );
        } else if (this
            .getAttribute(
            "id") ===
            "pitta-option") {
            pittaAnswer
                .classList.add(
                    "selected-answer"
                    );
            vataAnswer.classList
                .remove(
                    "selected-answer"
                    );
            kaphaAnswer
                .classList
                .remove(
                    "selected-answer"
                    );
        } else if (this
            .getAttribute(
            "id") ===
            "kapha-option") {
            kaphaAnswer
                .classList.add(
                    "selected-answer"
                    );
            pittaAnswer
                .classList
                .remove(
                    "selected-answer"
                    );
            vataAnswer.classList
                .remove(
                    "selected-answer"
                    );
        }
    });
}


// function to display the questions
function displayQuestions() {
currentQuestion += 1;
currentQuestionCounter.innerText =
    currentQuestion;
questionText.innerText =
    quizQuestions[i].question;
vataAnswer.innerText =
    quizQuestions[i].answers.v;
pittaAnswer.innerText =
    quizQuestions[i].answers.p;
kaphaAnswer.innerText =
    quizQuestions[i].answers.k;
i++;

}

//Add event listener to the next question button
nextButton.addEventListener('click',
function() {
    //Check which answer option has the selected class
    if (vataAnswer.classList
        .contains(
            'selected-answer')
        ) {
        //Increment the selected dosha points by one
        vataPoints++;
        //deselects answers and goes to the next question
        deselectAnswers();
        checkEndQuiz();
    } else if (pittaAnswer
        .classList.contains(
            'selected-answer')
        ) {
        pittaPoints++;
        deselectAnswers();
        checkEndQuiz();
    } else if (kaphaAnswer
        .classList.contains(
            'selected-answer')
        ) {
        kaphaPoints++;
        deselectAnswers();
        checkEndQuiz();
    } else {
        //Make sure that an answer is selected
        // Use sweetAlert : https://sweetalert.js.org/guides/
        swal({
            title: "Please choose one option!",
            text: `For an accurate result, it's very important that you answer all of the questions.`
        });
    }

});

//Function to deselect all answers before going to the next question
function deselectAnswers() {
vataAnswer.classList.remove(
    "selected-answer");
pittaAnswer.classList.remove(
    "selected-answer");
kaphaAnswer.classList.remove(
    "selected-answer");
}

// Function that checks if there's still questions to be answered
function checkEndQuiz() {
if (currentQuestion < quizQuestions
    .length) {
    displayQuestions();
} else {
    calculateDosha(vataPoints,
        pittaPoints, kaphaPoints
        );
    /**
     * If there's no more quiz questions to be answered,
     * store the dosha points in the local storage
     * and go to the sign up page
     */
    localStorage.setItem(
        'vataPoints', vataPoints
        );
    localStorage.setItem(
        'pittaPoints',
        pittaPoints);
    localStorage.setItem(
        'kaphaPoints',
        kaphaPoints);
    window.location =
        "./sign-up.html";
}
}

// Function to calculate the Dosha
function calculateDosha(v, p, k) {
//If Vata is the dominant dosha
if ((v > p) && (v > k)) {
    if (p > k) {
        dosha = "Vata - Pitta";
    } else if (k > p) {
        dosha = "Vata - Kapha";
    } else {
        dosha = "Vata";
    }
    //If Pitta is the dominant dosha
} else if ((p > v) && (p > k)) {
    if (v > k) {
        dosha = "Pitta - Vata";
    } else if (k > v) {
        dosha = "Pitta - Kapha";
    } else {
        dosha = "Pitta";
    }
    //If Kapha is the dominant dosha
} else if ((k > v) && (k > p)) {
    if (v > p) {
        dosha = "Kapha - Vata";
    } else if (p > v) {
        dosha = "Kapha - Vata";
    } else {
        dosha = "Kapha";
    }
} //If two doshas score the same points
else if ((v === p) && (v === k)) {
    dosha = "Tridoshic (read Vata)";
} else if (p === k) {
    dosha = "Pitta - Kapha";
} else if (k === v) {
    dosha = "Kapha - Vata";
} //If all of the three doshas score the same points
else {
    dosha = "Vata-Pitta";
}
//Store the dosha in the local storage
localStorage.setItem('dosha',
dosha);
}