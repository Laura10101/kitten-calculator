let sections = [document.getElementById('introduction'),
                document.getElementById('questions'),
                document.getElementById('results')];

//Initialise calculator
initialiseCalculator();

// create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
    currentQuestion = 0;
    questions = getQuestions();
    maternalAnswers = [];
    paternalAnswers = [];
    showIntroSection();
}

//these 3 functiuons control the display of the different sections 
//used 3 functions to reduce the chance of errors caused by incrementing current section too many times 

function showIntroSection() {
    currentSection = 0;
    showCurrentSection();
}

function showQuestionsSection() {
    currentSection = 1;
    showCurrentSection();
} 

function showResultsSection() {
    currentSection = 2;
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


