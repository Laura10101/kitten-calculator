//Get application data
const questions = getQuestions();

//Paths
const imgs = 'assets/img/';
const imgExt = '.png';

//Get references to DOM elements for sections
const sections = [document.getElementById('introduction'),
                document.getElementById('questions'),
                document.getElementById('results')];

//Get references to DOM elements for questions 
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answer-container');
const answerTemplate = document.getElementById('answer-template');
const previousQuestionButton = document.getElementById('previous-question-button');
const nextQuestionButton = document.getElementById('next-question-button');

//Initialise calculator
initialiseCalculator();

// Create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
    currentQuestion = 0;
    
    maternalAnswers = [];
    paternalAnswers = [];
    showIntroSection();
}

//These 3 functions control the display of the different sections 
//Used 3 functions to reduce the chance of errors caused by incrementing current section too many times 

function showIntroSection() {
    currentSection = 0;
    showCurrentSection();
}

function showQuestionsSection() {
    currentSection = 1;
    showCurrentSection();
    showCurrentQuestion();
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

//These functions traverse through the different questions 
function showNextQuestion() {
    currentQuestion = currentQuestion + 1;
    showCurrentQuestion();
}

function showPreviousQuestion() {
    currentQuestion = currentQuestion - 1;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    //Get current question from questions object 
    let question = questions[currentQuestion];
    let answers = question.answers;
    //Show question
    questionText.innerText = question.text;
    //Clear answers from the answer container
    answerContainer.innerHTML = "";
    //Display question answers
    for (let i = 0; i < answers.length; i++) {
        //Duplicate answer template
        let answerButton = answerTemplate.cloneNode(true);
        let answerText = answerButton.querySelector('#answer-description-template');
        let answerImage = answerButton.querySelector('#answer-image-template');

        //Create an id for the answer
        answerId = 'q' + currentQuestion + '-' + answers[i].text.replace('  ', ' ').replace(' ', '-');
        //Set answer description 
        answerText.innerText = answers[i].text; 
        
        //Set answer image
        imagePath = imgs + answerId + imgExt;
        answerImage.src = imagePath;
        
        //Set answer button ID
        answerButton.id = answerId + '-answer-button';
        
        //Set the answer image ID
        answerImage.id = answerId + '-answer-image';
        
        //Set the answer text ID
        answerText.id = answerId + 'answer-description';
        
        //Add the new answer button to the DOM
        answerContainer.appendChild(answerButton);
    }
    //Enable or disable the previous and next buttons, depending on which question we are on

}