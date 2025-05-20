# Vapika Dosha Quiz Testing

## TABLE OF CONTENTS

1) [Manual Testing](TESTING.md/#1-manual-testing)
    - [Internal events/links](TESTING.md/#internal-eventslinks)
    - [External links](TESTING.md/#external-links)
    - [EmailJS](TESTING.md/#emailjs)
    - [Quiz and quiz result](TESTING.md/#quiz--quiz-result)
2) [Code Validation](TESTING.md/#2-code-validation)
    - [W3C HTML Validation](TESTING.md/#w3c-html-validation)
    - [W3C (Jigsaw) CSS Validation](TESTING.md/#w3c-jigsaw-css-validation)
    - [JSHint JavaScript Validation](TESTING.md/#jshint-javascript-validation)
3) [Responsiveness testing](TESTING.md/#3-responsiveness-testing)
    - [Homepage responsiveness](TESTING.md/#homepage-responsiveness)
    - [Homepage modal windows responsiveness](TESTING.md/#homepage-modal-windows-responsiveness)
    - [Quiz responsiveness](TESTING.md/#quiz-responsiveness)
    - [Signup page responsiveness](TESTING.md/#signup-page-responsiveness)
    - [Quiz result responsiveness](TESTING.md/#quiz-result-responsiveness)
    - [Dosha modal windows responsiveness](TESTING.md/#dosha-modal-window-responsiveness)
4) [Browser compatibility](TESTING.md/#4-browser-compatibility)
5) [Bugs and fixes](TESTING.md/#5-bugs-and-fixes)
6) [Lighthouse reports](TESTING.md/#6-ligthouse-reports)
7) [User testing](TESTING.md/#7-user-testing)

[⬅ Back to the README.md file](README.md)
- - - 
## 1) MANUAL TESTING

### INTERNAL EVENTS/LINKS


- ##### LEARN MORE AND INSTRUCTIONS BUTTONS AND MODAL WINDOWS
![Learn more modal testing](docs/TESTING-images/learn-more-modal-testing.gif)
![Instructions modal testing](docs/TESTING-images/instructions-modal-testing.gif)

-The Learn More and Instructions buttons successfully open the modal windows

-The modal windows correctly close either triggered by the close x click or by clicking anywhere outside of the modal windows
- - -
- #### SELECT AND DESELECT ANSWERS
![Select and deselect answers testing](docs/TESTING-images/select-deselect-answer-testing.gif)

-The "take quiz" button successfully links to the quiz page

-When selected, the answer acquires the right style 

-The previous answer correctly deselects if the user changes answer
- - - 
- #### MANDATORY ANSWER
![Mandatory answer testing](docs/TESTING-images/mandatory-answer-testing.gif)

The quiz requires all of the questions to be answered:
the go to the next question button click correctly triggers the check for an answer to be selected and perfectly displays the SweetAlert window if not.
- - - 
- #### SIGNUP FORM INPUTS VALIDATION
![Signup form inputs validation testing](docs/TESTING-images/signup-form-input-validation.gif)
The text and email inputs in the Newsletter signup form are validated
- - - 
- #### SIGNUP SWEETALERT WINDOW
![Signup SweetAlert window testing](docs/TESTING-images/signup-sweetalert-testing.gif)

If the signup form is correctly submitted, the SweetAlert window successfully shows up for the right amount of time set in the timer (4secs) and redirects to the results page.
- - - 
- #### PIE CHART
![Pie chart testing](docs/TESTING-images/pie-chart-testing.gif)
The Pie chart in the results page behaves as planned/as it's supposed to:

-On hover, the pie chart slices show the corresponding dosha name, number of answers scored and percentage.

-On click, the slice correctly opens the modal window containing the information for that specific dosha
- - - 
### EXTERNAL LINKS
![Social external links testing](docs/TESTING-images//social-external-links-testing.gif)

All social media icon links open on a new page.
- - - 
### EMAILJS
![EmailJS Testing](docs/README-images/newsletter-email.png)
The signup form submission successfully sends a confirmation email to the user based on the email address stated in the form.

Also the username is shown to be correctly stored and displayed in the email intro.

To make sure the feature is working, I tested it using various email addresses (mine or relative's/friend's) ones and different names.
- - -
### QUIZ & QUIZ RESULT
The quiz logic revolves around the concept that the user dominant doshas are the ones that get more answers: each question has three possible answers and each answer corresponds to a specific dosha. 
To make things easier, answer 1 [0] always corresponds to Vata, answer 2[1] to Pitta and answer 3 [2] to Kapha.

Knowing this, I manually tested all of the possible combinations, including a Tridoshic case (all doshas get equal points) to make sure the results are being calculated correctly.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 2) CODE VALIDATION

### W3C HTML VALIDATION
- Homepage
![Homepage html validation](docs/TESTING-images/homepage-validation.png)
- Quiz page
![Quiz page html validation](docs/TESTING-images/quiz-page-validation.png)
- Signup page
![Signup page html validation](docs/TESTING-images/signup-page-validation.png)
- Results page
![Results page html validation](docs/TESTING-images/results-page-validated.png)

All html pages are validated with [W3C HTML validator](https://validator.w3.org/)and come back with no errors or warnings.
- - - 
### W3C (JIGSAW) CSS VALIDATION
![CSS validation](docs/TESTING-images/css-validation.png)

CSS code passes through the [JigSaw CSS validator](https://jigsaw.w3.org/css-validator/) without issues.
- - - 
### JSHINT JAVASCRIPT VALIDATION
- Script.js
![Script js validation](docs/TESTING-images/script-js-validation.png)

- Quiz.js
![Quiz js validation](docs/TESTING-images/quiz-js-validation.png)

- Sign-up.js
![Signup js validation](docs/TESTING-images/signup-js-validation.png)

- Results.js
![Results js validation](docs/TESTING-images/results-js-validation.png)

No significant issues come back when the JavaScript code is passed through [JSHint validator](https://jshint.com/).

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 3) RESPONSIVENESS TESTING

All of the website pages are fully responsive.

The responsiveness testing has been conducted using Google Chrome Developer Tools, both on the devices available and on "responsive" modality. 
- - - 
- ### HOMEPAGE RESPONSIVENESS
![Homepage responsiveness](docs/TESTING-images/homepage-responsiveness.gif)
- - - 
- ### HOMEPAGE MODAL WINDOWS RESPONSIVENESS
![Homepage modal window responsiveness](docs/TESTING-images/modals-responsiveness.gif)
- - - 
- ### QUIZ RESPONSIVENESS
![Quiz responsiveness](docs/TESTING-images/quiz-responsiveness.gif)
- - - 
- ### SIGNUP PAGE RESPONSIVENESS
![Signup form responsiveness](docs/TESTING-images/signup-responsiveness.gif)
- - - 
- ### QUIZ RESULT RESPONSIVENESS
![Results page responsiveness](docs/TESTING-images/results-responsiveness.gif) 
- - - 
- ### DOSHA MODAL WINDOW RESPONSIVENESS
![Dosha modal windows responsiveness](docs/TESTING-images/dosha-modal-responsiveness.gif)

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 4) BROWSER COMPATIBILITY

VAPIKA Dosha Quiz has been tested for browser compatibility on:

 - Google Chrome
 ![Google Chrome compatibility testing](docs/TESTING-images/chrome-compatibility.gif)
- - - 
 - Firefox
![Firefox compatibility testing](docs/TESTING-images/firefox-compatibility.gif)
- - - 
 - Microsoft Edge
![Microsoft Edge compatibility testing](docs/TESTING-images/edge-compatibility.gif)
- - - 
 - Opera
 ![Opera compatibility testing](docs/TESTING-images/opera-compatibility.gif)

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 5) BUGS AND FIXES
### CODE VALIDATION ERRORS AND WARNING

1) Homepage HTML validation error
![Homepage html validation error](docs/TESTING-images/homepage-validation-error.png)

The first time the homepage HTML was run through the W3C validator service, an error was returned.
Fixed by removing the type attribute in the icon link tag.
- - -

2) Signup page HTML validation errors and warning
![Signup page validation errors and warning](docs/TESTING-images/signup-page-validation-errors.png)

The sign-up.html file returned two errors and one warning during the code validation.

The two errors were related to the "method" and "action" attributes in the form element being empty. I decided to remove those attributes because of the default actions of the form element.

The warning was associated to the "type" attribute in the Javascript resources, and fixed by deleting it since it's unnecessary.
- - - 

3) Results page HTML validation errors and warning
![Results page validation errors and warning](docs/TESTING-images/results-page-validation-errors-and-warning.png)

In the results page, the two errors that came back during the code validation were related to the content of the Pitta dosha and Kapha dosha in the modal windows: the unordered list containing the dosha triggers was inside of a paragraph. And paragraphs cannot contain lists in html.
To fix it, the opening p tag was closed straight before the list span.

Again, a warning relating the "type" attribute in the Javascript resources was encountered and fixed by removing it.
- - - 
4) JSHint fixed validation issues
![Quiz js validation issue](docs/TESTING-images/quiz-js-validation-warning.png)
![Signup js validation issue](docs/TESTING-images/signup-js-validation-warning.png)

The first time I run the scripts into JSHint validator, a considerable amount of missing semicolons was found. All of them has been added in the pointed places.
- - - 

5) 404 Errors after deployment

The deployed website on github-pages was returning 404 errors when trying to access the quiz from the "Take Quiz" button, and when both of the buttons in the signup page were supposed to redirect to the results page.

The issue showed itself in proximity/during my second mentor call, and it was fixed thanks to my mentor help.

It was clear that the problem was in the file paths I had used to link to the pages stated above: after trying different approaches, the deployed website accepted as a file path to the root directory the format "./filename.html", and the 404 issues were fixed.
- - - 
6) Footer floating in the middle of the screen

I started to tackle the responsiveness and styling of the webpage only after the second mentor call for this project, because I wanted to focus on the Javascript functionalities first.
So during that call, my mentor made me notice that the footer of the website was floating in the middle of the page in the homepage, due to the fact that there wasn't enought content to push it to the bottom of the page.

To solve this, the footer has been given a fixed position following the tutorial on [W3schools](https://www.w3schools.com/howto/howto_css_fixed_footer.asp).
- - - 

7) Main content hidden behind footer

After fixing the footer issue and positioning it to "fixed", the content in the main div was staying hidden behind the footer. 

Fixed by adjusting margins and paddins.
- - - 
8) Quiz Tridoshic condition not working

When I started the testing, I noticed that the calculatedosha function wasn't working correctly: in fact, when all of the doshas scored the same amount of points, the "Tridoshic" result wasn't calculated as it was supposed to.

It was fixed by adding to the condition an AND operator to evaluate vata dosha being equal to pitta dosha AND vata dosha being equal to kapha dosha.
- - - 

9) Console errors in the sign-up page
![Console errors signup page](docs/TESTING-images/console-errors.png)

When I asked the peers on Slack for a review of the website, _Harry_ noticed that 2 errors were appearing in the console regarding the sign-up page:

One error was coming from a SweetAlert2 incorrect script on line 67 of the sign-up.html: easily fixed by deleting it.

The second error was due to the setInterval method from the swal.fire function: since that method's purpose was to call the function at specified intervals and that wasn't really useful for the SweetAlert window in the website, all that unnecessary code has been removed and the errors in the console fixed.
- - -

10) Pie Chart responsive only after page refresh 
![Pie Chart responsiveness issue](docs/TESTING-images/pie-chart-responsive-issue.gif)

When testing the results page for responsiveness with Google Chrome Developer tools, the Pie Chart was adjusting to the resized screen size only after refreshing the page. The issue appeared to be happening only when the screen was being resized for testing, and on the actual devices the page (and Pie Chart) was fully responsive.

I was able to find a solution at this link on [StackOverflow](https://stackoverflow.com/questions/8950761/google-chart-redraw-scale-on-window-resize): a function to call the function to draw the pie chart was created and it gets called when the window is resized and loaded.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 6) LIGTHOUSE REPORTS

All of the website pages have been also tested using [Lighthouse Chrome Developer Tool](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en).

They all score above 90 in all of the categories: Performance, Accessibility, Best Practices and SEO.

- Homepage lighthouse report
![Homepage lighthouse report](docs/TESTING-images/homepage-lighthouse-report.png)

- Quiz page lighthouse report
![Quiz page lighthouse report](docs/TESTING-images/quiz-lighthouse-report.png)

- Signup page lighthouse report
![Signup page lighthouse report](docs/TESTING-images/signup-lighthouse-report.png)

- Results page lighthouse report
![Results page lighthouse report](docs/TESTING-images/results-lighthouse-report.png)
- - - 

## 7) USER TESTING
The website has also been sent to family, friends and peers on Slack.
The response/review was very positive and no issues were encountered on their devices.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)

[⬅ Back to the README.md file](README.md)