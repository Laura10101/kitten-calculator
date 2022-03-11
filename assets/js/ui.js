import { getQuestions } from "./data";

// create function to pull questions in, to keep ui.js smaller and more focused: single reponsibility principle
function initialiseCalculator() {
    questions = getQuestions();
}

