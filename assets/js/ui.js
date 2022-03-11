let sections = [document.getElementById('introduction'),
                document.getElementById('questions'),
                document.getElementById('results')];

//Initialise calculator
initialiseCalculator();

// create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
    currentSection = 0;
    currentQuestion = 0;
    questions = getQuestions();
    maternalAnswers = [];
    paternalAnswers = [];
    showCurrentSection();
}

function showCurrentSection() {
    //Remove the current-section class from all sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("current-section");
    }

    //Add the current-section class to the currentSection
    sections[currentSection].classList.add("current-section")
}

