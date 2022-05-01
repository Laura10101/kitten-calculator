# Testing

## Browser Compatibility

### Background Gradient
- The following screenshots show that the background gradient displays correctly in Edge, Chrome, and Firefox.
- The gradient fills the background space in all browsers with no stitching.

On Edge:

![Background gradient on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-questions-one.png)

On Firefox:

![Background gradient on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-questions-one.png)

On Chrome:

![Background gradient on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-questions-one.png)

### Parent Genotype Questions including Phenotype Display and Answer Buttons
- The following screenshots show that the parent genotype questions, phenotype display, and answer buttons features works correctly in Edge, Chrome, and Firefox.
- Questions are displayed correctly.
- Users can correctly navigate between questions.
- Users can select answers.
- The phenotype display correctly updates as users answer questions.

On Edge:

![Questions feature on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-questions-one.png)

![Questions feature on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-questions-two.png)

![Questions feature on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-questions-three.png)

On Firefox:

![Questions feature on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-questions-one.png)

![Questions feature on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-questions-two.png)

![Questions feature on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-questions-three.png)

On Chrome:

![Questions feature on Chrome](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-questions-one.png)

![Questions feature on Chrome](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-questions-two.png)

![Questions feature on Chrome](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-questions-three.png)

The wording of questions has been changed since these screenshots were taken to more clearly indicate which parent is currently being entered. All tests were subsequently repeated to confirm the change did not break any functionality.

### Results Preloader
- The following screenshots show that the result preloader works correctly in Edge, Chrome, and Firefox.
- The animation works as expected.
- The countdown also counts down correctly.

On Edge:

![Results preloader on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-preloader.png)

On Firefox:

![Results preloader on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-preloader.png)

On Chrome

![Results preloader on Chrome](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-preloader.png)

### Results
- The following screenshots show that the results are correctly calculated and displayed in Edge, Chrome, and Firefox.
- A set of results are calculated.
- All elements of the results are displayed (image, probability, and phenotype description).

On Edge:

![Results on Edge](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-results.png)

On Firefox:
![Results on Firefox](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-results.png)

On Chrome:
![Results on Chrome](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-results.png)

### Comparium Tests
To further build confidence that 

## Code Validation

### HTML Validation
All validation errors identified during the development of the application were resolved.

One warning remains indicating that the sections that are used for the different parts of the application have no headers. I decided to ignore these warnings as adding headers would have undermined the layout of the application.

The index.html file was validated using the W3C official validator as shown below:
![HTML validation on the index.html file](https://laura10101.github.io/kitten-calculator/documentation/testing/html-validation-index.png)

Furthermore, the questions and results section of the application each generate HTML dynamically through JavaScript, so a sample of the HTML generated at each stage was also validated.

The following screenshot shows the validation results of HTML generated during the question stage of the application:

![HTML validation on the questions section](https://laura10101.github.io/kitten-calculator/documentation/testing/html-validation-questions.png)

The following screenshot shows the validation results of HTML generated during the results stage of the application:

![HTML validation on the results section](https://laura10101.github.io/kitten-calculator/documentation/testing/html-validation-results.png)

[Click here](https://validator.w3.org/nu/?doc=https%3A%2F%2Flaura10101.github.io%2Fkitten-calculator%2F) for a link to the official W3C validator for the application.

### CSS Validation
The CSS was validated through W3C's jigsaw validator and no errors were found.

![CSS validation](https://laura10101.github.io/kitten-calculator/documentation/testing/css-validation.png)

### JavaScript Validation

JSHint was used to validate the JavaScript for all three layers (UI, logic and data).

No validation errors were found for the UI layer:

![JS validation for the UI layer](https://laura10101.github.io/kitten-calculator/documentation/testing/js-validation-ui.png)

No validation errors were found for the logic layer. However, one undefined variable (module) was found. This is because the functions in the logic layer need to be exported for testing within Jest. However, the module exporter is a Node.js feature which is not recognised by the validator. This was therefore left in the code, but wrapped in a test to ensure that the undefined variable does not throw an error in the browser:

![JS validation for the logic layer](https://laura10101.github.io/kitten-calculator/documentation/testing/js-validation-logic.png)

No errors were identified for the data layer, although three unused variables were found. This is because these variables are the functions provided by the data layer. These are not consumed within the data.js file, but instead are used at higher layers of the application:

![JS validation for the data layer](https://laura10101.github.io/kitten-calculator/documentation/testing/js-validation-data.png)

## Responsiveness

### Background Gradient

- The following screenshots demonstrate that the background gradient displays correctly both on small desktop screens and on mobile devices.
- This test was performed as, during development, a problem was identified with the background gradient stitching differently at different device sizes.
- The test passes if the gradient fills the screen at all device sizes, across browsers.
- Larger screen sizes have been tested extensively through the browser compatibility tests above.

On Edge (small):

![Background gradient on a small Edge device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-gradient.png)

On Firefox (small):

![Background gradient on a small Firefox device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-gradient.png)

On Chrome (small):

![Background gradient on a small Chrome device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-gradient.png)

On Safari (mobile):

![Background gradient on a mobile device in Safari](https://laura10101.github.io/kitten-calculator/documentation/compatibility/mobile-gradient-small.png)

### Questions Section

  - The following screenshots demonstrate that the questions (including the phenotype display) stack properly on small desktop screens, and on mobile devices.
  - The test passes if the phenotype display, question text, and answer buttons all stack correctly within the white section box.
  - No horizontal scrolling should be needed, and no elements should stretch outside of the white box.
  - Larger screen sizes have been tested extensively through the browser compatibility tests above.

On Edge (small):

![Questions section on a small Edge device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-questions-small.png)

On Firefox (small):

![Questions section on a small Firefox device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-questions-small.png)

On Chrome (small):

![Questions section on a small Chrome device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-questions-small.png)

On Safari (mobile):

![Questions section on a mobile device in Safari](https://laura10101.github.io/kitten-calculator/documentation/compatibility/mobile-questions-small.png)

The wording of questions has been changed since these screenshots were taken to more clearly indicate which parent is currently being entered. All tests were subsequently repeated to confirm the change did not break any functionality.

### Results Page

  - The following screenshots demonstrate that the results stack properly on small desktop screens, and on mobile devices.
  - The test passes if the all results stack correctly within the white section box.
  - No horizontal scrolling should be needed, and no elements should stretch outside of the white box.
  - Larger screen sizes have been tested extensively through the browser compatibility tests above.

On Edge (small):

![Results section on a small Edge device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/edge-results-responsive.png)

On Firefox (small):

![Results section on a small Firefox device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/ff-results-responsive.png)

On Chrome (small):

![Results section on a small Chrome device](https://laura10101.github.io/kitten-calculator/documentation/compatibility/chrome-results-responsive.png)

On Safari (mobile):

![Results section on a mobile device in Safari](https://laura10101.github.io/kitten-calculator/documentation/compatibility/mobile-results-small.png)

## User Story Tests

**As a British Shorthair hobby breeder, I want to see an introduction explaining how the calculator will work, so that I understand how to use it**

This user story is satisfied by the Introductory Section described in the Features section of [README.md](README.md), as shown below:
![Introductory section](https://laura10101.github.io/kitten-calculator/documentation/features/introductory-section.png)

**As a British Shorthair hobby breeder, I need to be able to enter the genetic traits for both mum and dad, so that their kitten phenotypes and probabilities can be calculated**

This user story is satisfied by both the Parent Genotype Questions and Answer Buttons described in the Features section of [README.md](README.md). The screenshots below show an example of a full user journey for inputting two parents:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-one.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-two.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-three.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-four.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-five.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-six.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-six-a.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-seven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-eight.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-nine.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-ten.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-eleven.png)

The wording of questions has been changed since these screenshots were taken to more clearly indicate which parent is currently being entered. All tests were subsequently repeated to confirm the change did not break any functionality.


**As a British Shorthair hobby breeder, I want to see an image of each parent's phenotype as I enter their traits, so that I know what I have input so far**

This user story is satisfied by the Parent Phenotype Display described in the Features section of [README.md](README.md). The screenshots below show the phenotype display for two different sets of input:

![Phenotype display for a chocolate bicolour parent](https://laura10101.github.io/kitten-calculator/documentation/features/chocolate-bicolour-dad-phenotype.png)

![Phenotype display for a chocolate van parent](https://laura10101.github.io/kitten-calculator/documentation/features/chocolate-van-dad-phenotype.png)

**As a British Shorthair hobby breeder, I want to see an illustration showing the trait for each answer, so that I can understand which trait best matches my cat**

This user story is satisfied by the Answer Buttons feature described in the Features section of [README.md](README.md), as shown in the screenshot below:

![Answer buttons](https://laura10101.github.io/kitten-calculator/documentation/features/answer-buttons.png)

**As a British Shorthair hobby breeder, I want the application to prevent me from inputing invalid combinations of traits, so that I only see kittens that my cats can actually produce**

This user story is satisfied by the Question and Answer Filtering feature described in the Features section of [README.md](README.md). There are several examples of this feature at work in the user journey presented above. For example, on the first question dad is specified to be fawn. Fawn is a recessive trait and is the dilute of cinnamon so dad must have two cinnamon genes and two dilute genes, and therefore cannot carry any other colour. Questions two and three are therefore skipped and the user is taken straight to the tabby question:
![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-one.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-two.png)

By contrast, mum is specified to be black. Black is a dominant colour gene and so a black cat can additionally carry a gene for dilute and one gene for either chocolate or cinnamon. The user is therefore presented with two questions for mum that were not displayed for dad:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-six-a.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-seven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-eight.png)

Similarly, in the user journey above, dad is specified as a tabby and the user is therefore asked whether he carries a non-tabby gene:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-two.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-three.png)

By contrast, mum is specified as non-tabby. Tabby is a dominant gene, so a non-tabby cat cannot carry a tabby genes (otherwise the cat would be a tabby), so the non-tabby question is skipped:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-nine.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-ten.png)

In another example, dad is specified as non-pointed. Colourpoint is recessive, so to be a colourpoint cat the cat must be genetically homozygous, with two colourpoint genes. That also means that a non-pointed cat can carry the colourpoint gene, and produce colourpoint kittens if the other parent also has the colourpoint gene. Therefore, having selected that dad is non-pointed the user is asked whether he carries a single colourpoint gene:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-five.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-six.png)

By contrast, mum is entered as colourpoint and so the user moves straight to calculating kittens as there are no further questions remaining:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/documentation/journeys/questions-uj-eleven.png)

**As a British Shorthair hobby breeder, I want the application to ensure that I select the right number of traits for each question, so that it can accurately calculate my kittens**

This user story is satisfied by the Answer Buttons feature as described in the Features section of [README.md](README.md). None of the questions in the application are set as multiselect questions, and therefore only one answer can be selected for each question. The following screenshots show an example of this on the base colour question:

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/documentation/testing/answers-single-select-one.png)

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/documentation/testing/answers-single-select-two.png)

The following screenshots show an example of this for the dilute question:

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/documentation/testing/answers-single-select-three.png)

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/documentation/testing/answers-single-select-four.png)

**As a British Shorthair hobby breeder, I want to be able to return to previous questions, so that I can correct my answers without having to start again**

This user story is satisfied by the Previous Step feature as described in the Features section of [README.md](README.md). This button is shown below.
![Answer selected for dilute question](https://laura10101.github.io/kitten-calculator/documentation/features/dilute-question-selection.png)

Evidence that this button works as expected is provided as part of testing for the next user story.

**As a Shorthair hobby breeder, I want the application to forget answers I gave to subsequent questions if I return to previous questions, so that I can reanswer the questions correctly based on my updated choices**

This user story is satisfied by the second part of the Previous Step feature as described in the Features section of [README.md](README.md). The following screenshot shows the internal state of the application when the user has selected the first answer for the second question (arrays are zero-indexed in JavaScript so the first question and answer each have an index of 0 and so on):

![The model state after selecting "Yes" for the dilute question](https://laura10101.github.io/kitten-calculator/documentation/features/model-state-dilute-question.png)

If the user changes their answer to the previous question (click back and then change answer), their answer to any subsequent questions is forgotten:

![The model state after changing answers to the previous base colour question](https://laura10101.github.io/kitten-calculator/documentation/features/model-state-after-answer-change.png)

**As a British Shorthair hobby breeder, I want to confirm once I have entered all information for both mum and dad, so that the kitten results can be calculated**

To satisfy this user story, a calculate kittens button is shown to the user only once the application has all required information. The following screenshot shows the final question screen before an answer has been selected:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/documentation/testing/calculate-button-not-shown.png)

The following screenshot shows the same screen after an answer has been selected:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/documentation/testing/calculate-button-shown.png)

As discussed above, the final question may not be shown to users in all situations. This is because the penultimate question is whether or not mum is colourpoint whereas the final question asks whether mum carries colourpoint. Since colourpoint is a recessive trait, the final question is only valid for non-pointed cats. The following screenshot therefore shows that the calculate kittens button is displayed on the penultimate question if the cat is indicated to be colourpoint:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/documentation/testing/calculate-button-shown-penultimate.png)

**As a British Shorthair hobby breeder, I want the application to clearly indicate when it is calculating kitten results, so that I can be sure it hasn't crashed**

This user story is satisfied by the Results Preloader feature as described in the Features section of [README.md](README.md). There is an animation and a countdown which confirms that the browser has not frozen. The following screenshots show the results preloader in action and confirms that it correctly counts down:

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/documentation/testing/preloader-five.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/documentation/testing/preloader-four.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/documentation/testing/preloader-three.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/documentation/testing/preloader-two.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/documentation/testing/preloader-one.png)

Once the preloader countdown reaches zero, the results are displayed. This provides enough time for all kitten images to load in the background so the results display smoothly.

**As a British Shorthair hobby breeder, I want to see the results of my kitten calculation, so that I know what kittens mum and dad could produce**

This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The functionality involved in calculating and displaying results on the screen is divided into two layers. The logic layer in logic.js provides the calculations to work out what phenotypes can be produced from a pairing between the given mum and dad, and to work out the probability of each phenotype being produced. Separately, the ui layer in ui.js is responsible for creating an answer button for each phenotype returned by the logic layer, and for ensuring the probability and phenotype image are correctly displayed for each. User story testing for this user story therefore focused on confirming that the output of the logic layer is correctly displayed on the screen. Automated testing was used (as described below) to confirm that the logic layer correctly calculates results.

The following screenshot shows the output of the logic layer for a reasonably complex calculation:

![Example results](https://laura10101.github.io/kitten-calculator/documentation/testing/kitten-calculation-results.png)

The following screenshot shows the results as displayed in the UI layer:

![Example results](https://laura10101.github.io/kitten-calculator/documentation/testing/results.png)

This example confirms that the UI layer is correctly displaying the output as calculated by the logic layer. Automated testing confirmed that the logic layer was correctly calculating results (see below).

**As a Shorthair hobby breeder, I want to see an image for each possible kitten phenotype, so that I know what that phenotype will look like**

This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The following screenshot shows that, for a complex calculation, the correct image is displayed for each kitten phenotype:

![Example results](https://laura10101.github.io/kitten-calculator/documentation/testing/results.png)

**As a British Shorthair hobby breeder, I want to see the probability for each possible kitten phenotype, so that I know how likely it is that mum and dad will produce that type of kitten**

This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The following screenshot shows that, for a complex calculation, the correct probability is displayed for each kitten:

![Example results](https://laura10101.github.io/kitten-calculator/documentation/testing/results.png)

**As a British Shorthair hobby breeder, I want to be able to start the calculator again once I have reviewed my results, so that I can calculate the kittens for a different pairing**

The following screenshots confirm that this user story is satisfied by the Start Again button as described in the Features section of [README.md](README.md).

![Results page showing option to start again](https://laura10101.github.io/kitten-calculator/documentation/testing/results.png)

![Start again](https://laura10101.github.io/kitten-calculator/documentation/testing/start-again.png)

### Automated Tests

The logic layer in logic.js provides a set of functions for calculating the possible phenotypes produced by a pairing between mum and dad. The application captures information for five sets of genes (colour, dilute, white spotting, tabby, colourpoint) for both mum and dad. Mum and dad have two alleles each for each gene. There are, therefore, four possible genetic combinations for each gene in the offspring (mum 1 x dad 1, mum 1 x dad 2, mum 2 x dad 1, mum 2 x dad 2), so the total number of possible genetic permutations exceeds one thousand with more than seventy different phenotypes.

Comprehensively verifying the correctness of these logic layer calculations through manual testing would not, therefore, be feasible within a realistic timescale. I therefore opted to implement good automated test coverage of the logic layer. I adopted a bottom-up approach to testing, using comprehensive testing to check the validity of lower-level functions and a sample of automated tests to check that higher-level functions worked as expected based on the lower-level functions. The tests implemented were as follows:

**Unit tests for getPhenotypeFrequency**

getPhenotypeFrequency is a simple function to return the number of times that a given string appears in an array of strings. Five test cases were implemented to test this function for a range of different strings and arrays. All tests are passing.

The function is shown below:

```JavaScript
function getPhenotypeFrequency(possiblePhenotypes, phenotype) {
    let count = 0;
    possiblePhenotypes.forEach(function (possiblePhenotype) {
        if (possiblePhenotype === phenotype) {
            count = count + 1;
        }
    });
    return count;
}
```

Some of the automated tests for the function are shown below:

```JavaScript
test("getPhenotypeFrequency returns 1 for [black, blue, black, cinnamon tabby, cinnamon tabby], cinnamon tabby", () => {
    expect(getPhenotypeFrequency(["black", "blue", "black", "cinnamon tabby", "cinnamon tabby"], "cinnamon tabby")).toEqual(2);
});

test("getPhenotypeFrequency returns 10 for [black, black, black, black, black, black, black, black, black, black], black", () => {
    expect(getPhenotypeFrequency(["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"], "black")).toEqual(10);
});
```

**Unit tests for calculateProbabilities**

calculateProbabilities builds on getPhenotypeFrequency to produce a JSON object from an array of strings. The expectation is that each unique string in the input array becomes a key in the output JSON object, and that the value for each key is the probability that the string appears in the array. Four test cases of varying complexity were implemented to test this function for a range of different input arrays. All tests are passing.

The function is shown below:

```JavaScript
function calculateProbabilities(possiblePhenotypes) {
    let phenotypeProbabilities = {};

    //Get the distinct phenotypes
    let phenotypes = [...new Set(possiblePhenotypes)];

    //For each distinct phenotype, calculate the probability
    //that it occurs in the list of possible phenotypes
    //Set the probability in the object
    phenotypes.forEach(function(phenotype) {
        let frequency = getPhenotypeFrequency(possiblePhenotypes, phenotype);
        let probability = (frequency / possiblePhenotypes.length) * 100;
        phenotypeProbabilities[phenotype] = probability;
    });
    return phenotypeProbabilities;
}
```

The automated tests for the function are shown below:

```JavaScript
test("calculateProbabilities returns { 'lilac' : 100 } for [lilac]", () => {
    expect(calculateProbabilities(["lilac"])).toEqual({
        "lilac": 100
    });
});

test("calculateProbabilities returns { 'blue' : 50, 'black' : 50 } for [blue, blue, black, black]", () => {
    expect(calculateProbabilities(["blue", "blue", "black", "black"])).toEqual({
        "blue": 50,
        "black": 50
    });
});

test("calculateProbabilities returns { 'blue' : 50, 'black' : 25, 'cinnamon' : 25 } for [blue, blue, black, cinnamon]", () => {
    expect(calculateProbabilities(["blue", "blue", "black", "cinnamon"])).toEqual({
        "blue": 50,
        "black": 25,
        "cinnamon": 25
    });
});
```

**Unit tests for determineWhitespotting**

determineWhitespotting is a function which returns a string describing the coat pattern of a cat depending on how many whitespotting alleles the cat has. The function accepts two boolean values as input indicating whether allele 1 and allele 2 are respectively positive or negative for whitespotting. Four automated tests were provided to test all of the four possible permutations of input. All tests are passing.

The function is shown below:

```JavaScript
function determineWhitespotting(ws1, ws2) {
    if (ws1 === true && ws2 === true) {
        return "van";
    }
    if (ws1 === true || ws2 === true) {
        return "bicolour";
    }
    return "";
}
```

The automated tests for the function are shown below:

```JavaScript
describe("Determine white spotting", () => {
    test("true and true for white spotting returns van", () => {
        expect(determineWhitespotting(true, true)).toEqual("van");
    });
    test("true and false for white spotting returns bicolour", () => {
        expect(determineWhitespotting(true, false)).toEqual("bicolour");
    });
    test("false and true for white spotting returns bicolour", () => {
        expect(determineWhitespotting(false, true)).toEqual("bicolour");
    });
    test("false and false for white spotting returns ''", () => {
        expect(determineWhitespotting(false, false)).toEqual("");
    });
});
```

**Unit tests for determineTabby**

determineTabby is a function which returns a string describing the tabby markings of a cat depending on how many tabby alleles the cat has. The function accepts two boolean values as input to indicate whether allele 1 and allele 2 for the tabby gene are respectively positive or negative for tabby. Four automated tests were provided to test all of the four possible permutations of input. All tests are passing.

The function is shown below:

```JavaScript
function determineTabby(tb1, tb2) {
    if (tb1 === true || tb2 === true) {
        return "tabby";
    }
    return "";
}
```

The automated tests for the function are shown below:

```JavaScript
describe("Determine tabby", () => {
    test("true and true for tabby returns tabby", () => {
        expect(determineTabby(true, true)).toEqual("tabby");
    });
    test("true and false for tabby returns tabby", () => {
        expect(determineTabby(true, false)).toEqual("tabby");
    });
    test("false and true for tabby returns tabby", () => {
        expect(determineTabby(false, true)).toEqual("tabby");
    });
    test("false and false for tabby returns ''", () => {
        expect(determineTabby(false, false)).toEqual("");
    });
});
```

**Unit tests for determineColourpoint**

determineColourpoint is similarly a function which returns a string describing whether or not the cat is colourpoint based on the number of colourpoint alleles the cat has. Again, two boolean values are accepted as input to indicate whether allele 1 and allele 2 are positive or negative for colourpoint. Four automated tests were provided to test all of the possible permutations of input. All tests are passing.

The function is shown below:

```JavaScript
function determineColourpoint(cp1, cp2) {
    if (cp1 === true && cp2 === true) {
        return "point";
    }
    return "";
}
```

The automated tests for the function are shown below:

```JavaScript
describe("Determine colourpoint", () => {
    test("true and true for colourpoint returns point", () => {
        expect(determineColourpoint(true, true)).toEqual("point");
    });
    test("true and false for colourpoint returns ''", () => {
        expect(determineColourpoint(true, false)).toEqual("");
    });
    test("false and true for colourpoint returns ''", () => {
        expect(determineColourpoint(false, true)).toEqual("");
    });
    test("false and false for colourpoint returns ''", () => {
        expect(determineColourpoint(false, false)).toEqual("");
    });
});
```

**Unit tests for determineColour**

determineColour also produces a string describing the colour that a cat will be. It accepts two string inputs representing the two colour alleles the cat has, but also accepts two boolean values indicating the number of dilute alleles the cat has. Comprehensive testing was also performed here to ensure that all possible permutations of input produce the correct result for colour. All tests are passing.

The function is shown below:

```JavaScript
function determineColour(colour1, dilute1, colour2, dilute2) {
    if (colour1 === "B" || colour2 === "B") {
        if (dilute1 === true && dilute2 === true) {
            return "Blue";
        }
        return "Black";
    }

    if (colour1 === "b" || colour2 === "b") {
        if (dilute1 === true && dilute2 === true) {
            return "Lilac";
        }
        return "Chocolate";
    }

    if (dilute1 === true && dilute2 === true) {
        return "Fawn";
    }
    return "Cinnamon";
}
```

Some of the automated tests for the function are shown below:

```JavaScript
test("B, false, B, false for colour returns Black", () => {
    expect(determineColour("B", false, "B", false)).toEqual("Black");
});

test("B, false, B, true for colour returns Black", () => {
    expect(determineColour("B", false, "B", true)).toEqual("Black");
});

test("B, true, B, false for colour returns Black", () => {
    expect(determineColour("B", true, "B", false)).toEqual("Black");
});
```

**Unit tests for determinePhenotype**
determinePhenotype is a function which uses the determineWhitespotting, determineTabby, determineColourpoint, and determineColour functions to determine the overall phenotype of a cat based on its genotype. A JSON object is accepted as input which consists of two values for each gene, representing the genotype of the cat. The relevant underlying functions are called to determine the phenotypical traits for each gene based on the two values for that gene, and these results are concatenated to produce the overall string. Automated testing was performed to verify the output phenotype for a sample of the more complex genotypes. All tests are passing.

The function is shown below:

```JavaScript
function determinePhenotype(genotype) {
    let phenotype = determineColour(
            genotype[0].colour,
            genotype[0].dilute,
            genotype[1].colour,
            genotype[1].dilute
        );

    phenotype += " " + determineTabby(genotype[0].tabby, genotype[1].tabby);

    phenotype += " " + determineColourpoint(
            genotype[0].colourpoint,
            genotype[1].colourpoint
        );

    phenotype += " " + determineWhitespotting(
            genotype[0].whiteSpotting,
            genotype[1].whiteSpotting
        );

    return phenotype.replaceAll(new RegExp("[ ]{2,}", "g"), " ").trim();
}
```

Some of the automated tests for the function are shown below:

```JavaScript
test("BB with no tabby, whitespotting or point determined as 'black'", () => {
    expect(determinePhenotype([
        {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
        {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
    ])).toEqual("Black");
});

test("b1b1 with single tabby, but no whitespotting or point determined as 'cinnamon tabby'", () => {
    expect(determinePhenotype([
        {"colour": "b1", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
        {"colour": "b1", "dilute": false, "tabby": true, "whiteSpotting": false, "colourpoint": false}
    ])).toEqual("Cinnamon tabby");
});
```

**Unit tests for calculateKittens**
The calculate kittens function is the top-level logic layer function which orchestrates the overall calculation process. The function first generates all possible kitten genotypes based on the possible permutations of mum and dad's genotypes. It then produces an array containing the phenotype for each calculated kitten genotype. Finally, it passes this array into calculateProbabilities to produce the final JSON object representing the probability of each unique phenotype occuring. Two automated test cases were implemented to test that this functionality works as expected. All tests are passing.

The function is shown below:

```JavaScript
function calculateKittens(maternalGenotype, paternalGenotype, genes) {
    let possibleGenotypes =
        calculatePossibleGenotypes
        (maternalGenotype, paternalGenotype, genes, 0);

    let possiblePhenotypes =
        determinePhenotypes(possibleGenotypes);
    return calculateProbabilities(possiblePhenotypes);
}
```

Sample automated tests for the function are shown below:

```JavaScript
describe("Calculate kittens", () => {
    test("BB x BB returns { 'black' : 100 }", () => {
        expect(calculateKittens(
            [
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            [
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            ["colour", "dilute", "tabby", "colourpoint", "whiteSpotting"]
        )).toEqual(
            {
                "Black": 100
            }
        );
    });

    test("bb1 Dd aa WSws CSCS x bb dd aa wsws CSCS returns { 'Chocolate' : 25, 'Chocolate bicolour': 25, 'Lilac': 25, 'Lilac bicolour': 25 }", () => {
        expect(calculateKittens(
            [
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": true, "colourpoint": false},
                {"colour": "b1", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            [
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            ["colour", "dilute", "tabby", "colourpoint", "whiteSpotting"]
        )).toEqual(
            {
                "Chocolate": 25,
                "Chocolate bicolour": 25,
                "Lilac": 25,
                "Lilac bicolour": 25
            }
        );
    });
});

```

The following screenshot shows the results of the automated testing:

![Automated testing results](https://laura10101.github.io/kitten-calculator/documentation/testing/automated-tests.png)

## Bugs

### Fixed Bugs
The following bugs were fixed during the development process:
- Initially, once the user had entered dad's genes, the 'Next' button would have to be clicked twice in order to get to the next question, which was the first question for mum's genes. 
- The gradient background was stitching and repeating itself. This was resolved by setting the background-attachment to fixed in CSS.
- Users were able to move to the next question without answering the current question. To fix this, I hid the buttons so that the user could not progress to the next section without making a relevant selection (in order to avoid incorrect calculations).
- The 'Next Question' buttons were appearing for a split second on each screen. This meant that if a user clicked twice, quickly, they could get through to the next question without entering the correct informaiton. This was due to a delay of 0.4 seconds in button styling, which was also applying to the hide button action. I resolved the issue by deleting the 0.4s delay.
- Some phenotype descriptions included multiple spaces. This was phenotype descriptions are calculated by concatenating the description for each trait (colour, tabby, white spotting, point) but some variants of some traits may return an empty string. The issue was resolved using RegEx to replace all instances of two or more spaces with a single space.
- Button IDs contained spaces and, in some cases, double spaces. This was partly because button IDs are calculated from phenotype IDs. Fixing the previous bug improved the issue. A further issue was that I was using replace() to exchange spaces for hyphens, which only replpaces the first instance. The issue was ultimately fixed by switching to replaceAll() instead.
- The message 'you are currently entering dad's genes', and the visual represetnation of the parent cat did not appear until the user had made thier first selection. This is because the logic to display the parent's phenotype was initially only invoked on answer selection. To address this, I amended the logic so that it was also called when displaying a question.
- The colours of cats were not capitalised in their descriptions. This was resolved by capitalising all of the basic colours in the questions data JSON object, since the colour is always the first word of the string.
- The application was allowing users to enter that dad/mum was black or blue and carried chocolate AND cinnamon. It is not possible for a cat to be black and carry chocolate and cinnamon, only one or the other. This is because I had intially grouped the dilute question and the "colours carried" question into one which was set to multiselect. The functionality does not yet exist to allow conditional answer filtering within a single question. I therefore resolved the issue by separating out dilute and "colours carried", making each single select only.
- Selection of the next or previous valid question was not working correctly for the first or last question, or the last question before changing parent. This was because several boundary conditions were not being adequately handled in the showNextQuestion and showPreviousQuestion functions. Several refinements were made and tested to ensure this worked as required.
- When calculating gene permutations, all gene keys were displaying as the literal string 'gene' instead of the name of the corresponding gene. This was resolved by updating the syntax used to build the gene permutation JSON object (see commit 0b214a00a97a7422326db5e5ae70de4701deab8f). The revised syntax, however, was not validated by JSHint so was further refined by commit cae0cc4b7aaea038b2d44044704a69255f34fbe9.
- determineWhitespotting was returning 'high white' instead of 'van'. The relevant string literal was updated accordingly.
- The answers from previous questions were displayed in addition to the new answers when moving to the next question. Logic was added to clear the existing answers when display a new question. 

### Unresolved Bugs
There was one issue that I encountered that remains: 
- A cursor appears on some of the buttons and images. I have investigated this issue on a number of devices and have so far not been able to replicate the issue on any device other than my own PC. Further investigation continues to be underway in order to identify the cause of the problem and remediate this.