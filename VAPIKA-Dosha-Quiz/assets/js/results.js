// JavaScript for quiz-results.html


/**
 * Get the dosha result and username stored in the local
 * and session storage and store their values in variables
 */
let dosha = localStorage.getItem('dosha');
let userName = sessionStorage.getItem('userName');
//DOM access
let doshaSpan = document.getElementById('dosha-result');
let userNameSpan = document.getElementById('user-name');
let resultsHeading = document.getElementById('results-heading');

//Display dosha result in the heading
doshaSpan.textContent = dosha;
/**
 * If an username has been submitted with the form, display it along with the dosha results.
 * Otherwise, display the string below with the result only
 */
if (userName) {
    userNameSpan.textContent = `${userName}, `;
} else {
    resultsHeading.innerHTML = `Your Dosha is <span id="dosha-result">${dosha} </span>!`;
};

/**
 * Google charts implementation:
 * Instructions followed on
 * https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart
 */

// Load the Visualization API and the corechart package.
google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    //Get the doshas points and store them in variables
    let vataPoints = parseInt(localStorage.getItem('vataPoints'));
    let pittaPoints = parseInt(localStorage.getItem('pittaPoints'));
    let kaphaPoints = parseInt(localStorage.getItem('kaphaPoints'));
    data.addColumn('string', 'Dosha');
    data.addColumn('number', 'Percentage');
    /**
     * Dosha name and corresponding points and percentages
     * that get displayed in each pie chart slice
     */
    data.addRows([
        ['Vata', vataPoints],
        ['Pitta', pittaPoints],
        ['Kapha', kaphaPoints],
    ]);

    // Set chart options
    var options = {
        width: '100%',
        height: '100%',
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        },
        backgroundColor: '#9f7e74',
        legend: {
            position: 'none'
        },
        tooltip: {
            textStyle: {
                fontSize: 22
            },
            showColorCode: true
        },
        sliceVisibilityTreshold: .0,
        slices: [{
            color: '#8accf2',
            textStyle: {
                color: 'black'
            }
        }, {
            color: '#f7cf97',
            textStyle: {
                color: 'black'
            }
        }, {
            color: '#c3fabb',
            textStyle: {
                color: 'black'
            }
        }],
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    /**
     * Add a function to redraw the chart when the page is loaded and resized.
     * This is to fix the issue documented in the TESTING.md
     * under "Bugs & Fixes", point 10.
     * Solution found on https://stackoverflow.com/questions/8950761/google-chart-redraw-scale-on-window-resize
    **/
    function resize() {
        chart.draw(data, options);
    }

    window.onload = resize;
    window.onresize = resize;
    
    google.visualization.events.addListener(chart, 'select', function (e) {
        var selection = chart.getSelection();
        if (selection[0].row === 0) {
            let vataModal = document.getElementById("vata-modal");
            vataModal.style.display = "block";
            let closeVata = document.getElementsByClassName("close-vata")[0];
            closeVata.onclick = function () {
                vataModal.style.display = "none";
            };
        } else if (selection[0].row === 1) {
            let pittaModal = document.getElementById("pitta-modal");
            pittaModal.style.display = "block";
            let closePitta = document.getElementsByClassName("close-pitta")[0];
            closePitta.onclick = function () {
                pittaModal.style.display = "none";
            };
        } else {
            // Get the modal
            let kaphaModal = document.getElementById("kapha-modal");
            //Open the modal
            kaphaModal.style.display = "block";
            // Get the <span> element that closes the modal
            let closeKapha = document.getElementsByClassName("close-kapha")[0];
            // When the user clicks on <span> (x), close the modal
            closeKapha.onclick = function () {
                kaphaModal.style.display = "none";
            };
        }

    });
}