//Get application data
const questions = getQuestions();
const parents = ['dad', 'mum'];

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
const calculateKittensButton = document.getElementById('calculate-kittens-button');

//Initialise calculator
initialiseCalculator();

/*
 *  INITIALISATION
 */
// Create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
    currentParent = 0;
    currentQuestion = 0;
    model = initialiseModel();
    showIntroSection();
}

/*
 *  CONTROL SECTION FLOW
 */
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

/*
 *  CONTROL QUESTION FLOW
 */
//These functions traverse through the different questions 
function showNextQuestion() {
    if (currentParent == 0 && currentQuestion == questions.length - 1) {
        currentParent = 1;
        currentQuestion = 0;
    }
    else currentQuestion = currentQuestion + 1;
    showCurrentQuestion();
    controlFlowButtons();
}

function showPreviousQuestion() {
    if (currentParent == 1 && currentQuestion == 0) {
        currentParent = 0;
        currentQuestion = 0;
    }
    else currentQuestion = currentQuestion - 1;
    showCurrentQuestion();
    controlFlowButtons();
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
        let answerDescriptor = 'q' + currentQuestion + '-' + answers[i].text.replace('  ', ' ').replace(' ', '-');
        let answerId = 'q' + currentQuestion + '-a-' + i;
        //Set answer description 
        answerText.innerText = answers[i].text; 
        
        //Set answer image
        imagePath = imgs + answerDescriptor + imgExt;
        answerImage.src = imagePath;
        
        //Set answer button ID
        answerButton.id = answerId + '-answer-button';

        //Set the onclick event handler for the answer
        answerButton.onclick = function() { selectAnswer(answerButton.id); }
        
        //Set the answer image ID
        answerImage.id = answerId + '-answer-image';
        
        //Set the answer text ID
        answerText.id = answerId + 'answer-description';
        
        //Add the new answer button to the DOM
        answerContainer.appendChild(answerButton);
    }
}

//Enable or disable buttons
function controlFlowButtons() {
    //Enable or disable the previous and next buttons, depending on which question we are on
    disableButton(calculateKittensButton);
    if (currentParent == 0 && currentQuestion == 0) {
        disableButton(previousQuestionButton);
    }
    else if (currentParent == 1 && currentQuestion == questions.length - 1) {
        disableButton(nextQuestionButton);
        enableButton(calculateKittensButton);
    }
    else {
        enableButton(previousQuestionButton);
        enableButton(nextQuestionButton);
    }
}

function enableButton(button) {
    button.classList.remove("disabled-button");
}

function disableButton(button) {
    button.classList.add("disabled-button");
}

/*
 *  CONTROL ANSWER BUTTONS
 */

function selectAnswer(buttonId) {
    //Clear current selection if question is not multiselect
    if (!questions[currentQuestion].multiselect) {
        for (let i = 0; i < answerContainer.children.length; i++) {
            answerContainer.children[i].classList.remove('selected');
        }
    }
    answerContainer.querySelector('#' + buttonId).classList.add('selected');
    //Now the buttons are correctly set, update the selected answers in the model
    updateSelectedAnswers();
}

/*
 *  MANAGE MODEL
 */
function initialiseModel() {
    let initModel = {
        'mum' : initialiseAnswersModel(),
        'dad' : initialiseAnswersModel()
    };
    return initModel;
}

function initialiseAnswersModel() {
    let answerModel = {};
    for (let i = 0; i < questions.length; i++) {
        answerModel[i] = [];
    }
    return answerModel;
}

function updateSelectedAnswers() {
    //Clear answers for the current question onwards
    //This is because the validity of subsequent answers may be contingent on
    //previous answers
    for (let i = currentQuestion; i < questions.length; i++) {
        model[parents[currentParent]][i] = [];
    }

    //Iterate through the answer container
    for (let i = 0; i < answerContainer.children.length; i++) {
        let answer = answerContainer.children[i];
        if (answer.classList.contains('selected')) {
            //Get the answer index from the answer button's id. It is sandwhiched between q-{question index}-a- and -answer-button
            let answerId = parseInt(answer.id.substring(answer.id.indexOf('-a-') + 3, answer.id.indexOf('-answer-button')));
            model[parents[currentParent]][currentQuestion].push(answerId);
        }
    }
}

/*
 *  DISPLAY RESULTS
 */
function displayResults() {
    results = calculateKittens();
}