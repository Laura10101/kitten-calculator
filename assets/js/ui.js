/* jshint esversion: 8 */
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
const resultsContainer = document.getElementById('results-info-container');
const resultTemplate = document.getElementById('result-template');

//Define constants to hold the three parent display elements
const parentDisplayExplanation = document.getElementById('parent-display-explanation');
const parentDisplayImage = document.getElementById('parent-display-image');
const parentDisplayPhenotype = document.getElementById('parent-display-phenotype');

//Define the model
let model = [];
let currentSection = 0;
let currentParent = 0;

//Set up events
document.getElementById("start-button").onclick = showQuestionsSection;
document.getElementById("previous-question-button").onclick = showPreviousQuestion;
document.getElementById("next-question-button").onclick = showNextQuestion;
document.getElementById("calculate-kittens-button").onclick = showResultsSection;
document.getElementById("previous-section-button").onclick = showQuestionsSection;
document.getElementById("restart-button").onclick = initialiseCalculator();

//Initialise calculator
initialiseCalculator();

/*
 *  INITIALISATION
 */
// Create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
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

    currentParent = 0;
    currentQuestion = -1;
    showNextQuestion();
}

function showResultsSection() {
    currentSection = 2;
    showCurrentSection();
    displayResults();
}

function showCurrentSection() {
    //Remove the current-section class from all sections
    sections.forEach(section => {
        section.classList.remove("current-section");
    });

    //Add the current-section class to the currentSection
    sections[currentSection].classList.add("current-section");
}

/*
 *  CONTROL QUESTION FLOW
 */
//These functions traverse through the different questions
function showNextQuestion() {
    let isValid = false;
    do {
        if (currentParent == 0 && currentQuestion == questions.length - 1) {
            currentParent = 1;
            currentQuestion = 0;
        }
        else {
            currentQuestion = currentQuestion + 1;
        }
        isValid = currentQuestion < questions.length && isValidQuestion(currentQuestion) && hasValidAnswers(currentQuestion);
    } while (currentQuestion <= questions.length - 1 && !isValid);
    if (isValid) showCurrentQuestion();
    controlFlowButtonsForDisplayedQuestion();
}

function showPreviousQuestion() {
    do {
        if (currentParent == 1 && currentQuestion == 0) {
            currentParent = 0;
            currentQuestion = questions.length - 1;
        }
        else currentQuestion = currentQuestion - 1;
    } while (!isValidQuestion(currentQuestion) || !hasValidAnswers(currentQuestion));
    if (currentQuestion >= 0) showCurrentQuestion();
    controlFlowButtonsForDisplayedQuestion();
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
    answers.forEach((answer, i) => {
        if (isValidAnswer(currentQuestion, i)) {
            //Duplicate answer template
            let answerButton = answerTemplate.cloneNode(true);
            let answerText = answerButton.querySelector('#answer-description-template');
            let answerImage = answerButton.querySelector('#answer-image-template');

            //Create an id for the answer
            let answerId = 'q' + currentQuestion + '-a-' + i;
            //Set answer description
            answerText.innerText = answer.text;

            //Set answer image
            let imagePath = imgs + answer.image + imgExt;
            answerImage.src = imagePath;

            //Set answer button ID
            answerButton.id = answerId + '-answer-button';

            //Set the onclick event handler for the answer
            answerButton.onclick = function() { selectAnswer(answerButton.id); };

            //Set the answer image ID
            answerImage.id = answerId + '-answer-image';

            //Set the answer text ID
            answerText.id = answerId + 'answer-description';

            //Add the new answer button to the DOM
            answerContainer.appendChild(answerButton);
        }
    });
    updateParentDisplay();
}

/*
 * TEST PRECONDITIONS ON QUESTIONS AND ANSWERS
 */
//Check whether questions and answers are valid based on their preconditions and
//the answers given to previous questions
function isValidQuestion(q) {
    let preconditions = questions[q].preconditions;
    return preconditionsSatisfied(preconditions);
}

function hasValidAnswers(q) {
    let validAnswerExists = false;
    questions[q].answers.forEach((answers, a) => {
        if (isValidAnswer(q, a)) {
            validAnswerExists = true;
        }
    });
    return validAnswerExists;
}

function isValidAnswer(q, a) {
    let preconditions = questions[q].answers[a].preconditions;
    return preconditionsSatisfied(preconditions);
}

//A precondition is satisfied if one of the answers actually given for the associated question
//is one of the valid answers for the precondition. A list of preconditions is satisfied if
//all preconditions in the list are satisifed.
function preconditionsSatisfied(preconditions) {
    let preconditionsSatisfied = true;
    for (let i = 0; i < preconditions.length; i++) {
        let validAnswers = preconditions[i].validAnswerIndices;
        let answers = model[parents[currentParent]][preconditions[i].questionIndex];
        let preconditionSatisfied = false;
        for (let a = 0; a < answers.length; a++) {
            if (validAnswers.includes(answers[a])) {
                preconditionSatisfied = true;
                break;
            }
        }
        if (!preconditionSatisfied) {
            preconditionsSatisfied = false;
            break;
        }
    }
    return preconditionsSatisfied;
}

/*
 * CONTROL FLOW BUTTONS
 * Two functions are needed here as the flow buttons are controlled in two steps
 * Firstly, the previous button and/or calculate buttons are displayed if
 * we are on the last question. The previous button is hidden if we are on the first question.
 * The calculate button is hidden if we are not on the last question.
 * Secondly, the next button is only displayed when an answer is selected and then,
 * only if not on the last question, or the penultimate question with no valid answers
 * to the ultimate question.
 */
//Enable or disable buttons
function controlFlowButtonsForDisplayedQuestion() {
    //Enable or disable the previous and next buttons, depending on which question we are on
    disableButton(calculateKittensButton);
    disableButton(nextQuestionButton);
    if (currentParent == 0 && currentQuestion == 0) {
        disableButton(previousQuestionButton);
    }
    else {
        enableButton(previousQuestionButton);
    }
}

function controlFlowButtonsForSelectedAnswer() {
    //Catch-all - disable the next/calculate buttons so they only display if new selection
    //has valid next question
    disableButton(calculateKittensButton);
    disableButton(nextQuestionButton);

    //This logic ensures that next question button displayed ONLY if:
    //  - We are not on the second parent
    //  - Or, if we are on the second parent, then:
    //    * We are not on the last question AND
    //    * If we are on the penultimate question, then:
    //      + The last question is valid given current selection
    //If penultimate question and question is not valid, display calculate button instead
    if (currentParent == 1) {
        if (currentQuestion >= questions.length - 1) {
            enableButton(calculateKittensButton);
        }
        if (currentQuestion < questions.length - 1) {
            if (currentQuestion == questions.length - 2) {
                if (isValidQuestion(currentQuestion + 1) && hasValidAnswers(currentQuestion + 1)) {
                    enableButton(nextQuestionButton);
                }
                else {
                    enableButton(calculateKittensButton);
                }
            }
            else {
                enableButton(nextQuestionButton);
            }
        }
    }
    else {
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
    updateParentDisplay();
    controlFlowButtonsForSelectedAnswer();
}

/*
 * DISPLAY RESULTS
 */
function displayResults() {
    let genotypes = calculateGenotypesFromAnswers();
    let kittenResults = calculateKittens(genotypes.mum, genotypes.dad, getGenes());

    Object.keys(kittenResults).forEach(function(phenotype) {
        let frequency = kittenResults[phenotype];
        let phenotypeId = getPhenotypeId(phenotype);

        let resultSpan = resultTemplate.cloneNode(true);
        let resultImage = resultSpan.querySelector('#result-image-template');
        let resultFrequency = resultSpan.querySelector('#result-percentage-template');
        let resultDescription = resultSpan.querySelector('#result-description-template');

        resultSpan.id = phenotypeId + '-result-span';

        resultImage.id = phenotypeId + '-result-img';
        //resultImage.src = imgs + phenotypeId + imgExt;
        resultImage.src = imgs + 'blue-self-draft' + imgExt; //this is only for testing, until the proper images arrive

        resultFrequency.id = phenotypeId + '-result-percentage-paragraph';
        resultFrequency.innerText = frequency + '%';

        resultDescription.id = phenotypeId + '-result-paragraph';
        resultDescription.innerText = phenotype;

        resultsContainer.appendChild(resultSpan);
    });
}

function getPhenotypeId(phenotype) {
    return phenotype.toLowerCase().replaceAll(" ", "-");
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

//Update the parent display/image
function updateParentDisplay() {
    let genotypes = calculateGenotypesFromAnswers();
    let parent = parents[currentParent];
    let currentParentPhenotype = determinePhenotype(genotypes[parent]);
    let phenotypeId = getPhenotypeId(currentParentPhenotype);
    let image = imgs + 'blue-self-draft' + imgExt; //draft image used initially, update before launch

    parentDisplayExplanation.innerText = "You are currently entering " + parent + "'s genes. The image below will update as you make selections:";
    parentDisplayImage.src = image;
    parentDisplayPhenotype.innerText = currentParentPhenotype;
}

//Calculate a genotype model from a given set of answers
function calculateGenotypesFromAnswers() {
    let genotypes = getDefaultGenotypes();
    genotypes.mum = calculateParentGenotype(model.mum, genotypes.mum);
    genotypes.dad = calculateParentGenotype(model.dad, genotypes.dad);
    return genotypes;
}

//Calculate the genotype for a single parent given the answers for that parent
function calculateParentGenotype(parentModel, parentGenotype) {
    for (let q = 0; q < questions.length; q++) {
        for (let a = 0; a < parentModel[q].length; a++) {
            let geneMappings = questions[q].answers[parentModel[q][a]].geneMapping;
            for (let m = 0; m < geneMappings.length; m++) {
                let gene = geneMappings[m].gene;
                //Only update P1 if the gene mapping exists for p1
                if (Object.keys(geneMappings[m]).includes("p1")) {
                    let p1 = geneMappings[m].p1;
                    parentGenotype[0][gene] = p1;
                }
                //it will always exist for gene 2
                let p2 = geneMappings[m].p2;
                parentGenotype[1][gene] = p2;
            }
        }
    }
    return parentGenotype;
}