# Testing

## Browser Compatibility

### Introductory Section

### Feature 2

## Code Validation

### HTML Validation

### CSS Validation

### JavaScript Validation

## Responsiveness

### Background Gradient

### Questions Page

### Results Page

## User Story Tests

**As a British shorthair hobby breeder, I want to see an introduction explaining how the calculator will work, so that I understand how to use it**]
This user story is satisfied by the Introductory Section described in the Features section of [README.md](README.md), as shown below:
![Introductory section](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/introductory-section.png)

**As a British shorthair hobby breeder, I need to be able to enter the genetic traits for both mum and dad, so that their kitten phenotypes and probabilities can be calculated**
This user story is satisfied by both the Parent Genotype Questions and Answer Buttons described in the Features section of [README.md](README.md). The screenshots below show an example of a full user journey for inputting two parents:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-one.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-two.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-three.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-four.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-five.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-six.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-seven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-eight.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-nine.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-ten.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-eleven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-twelve.png)

**As a British shorthair hobby breeder, I want to see an image of each parent's phenotype as I enter their traits, so that I know what I have input so far**
This user story is satisfied by the Parent Phenotype Display described in the Features section of [README.md](README.md). The screenshots below show the phenotype display for two different sets of input:

![Phenotype display for a chocolate bicolour parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/chocolate-bicolour-dad-phenotype.png)

![Phenotype display for a chocolate van parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/chocolate-van-dad-phenotype.png)

**As a British shorthair hobby breeder, I want to see an illustration showing the trait for each answer, so that I can understand which trait best matches my cat**
This user story is satisfied by the Answer Buttons feature described in the Features section of [README.md](README.md), as shown in the screenshot below:

![Answer buttons](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/answer-buttons.png)

**As a British shorthair hobby breeder, I want the application to prevent me from inputing invalid combinations of traits, so that I only see kittens that my cats can actually produce**
This user story is satisfied by the Question and Answer Filtering feature described in the Features section of [README.md](README.md). There are several examples of this feature at work in the user journey presented above. For example, on the first question dad is specified to be fawn. Fawn is a recessive trait and is the dilute of cinnamon so dad must have two cinnamon genes and two dilute genes, and therefore cannot carry any other colour. Questions two and three are therefore skipped therefore and the user is taken straight to the tabby question:
![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-one.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-two.png)

By contrast, mum is specified to be black. Black is the most dominant colour gene and so a black cat can additionally carry a gene for dilute and one gene for chocolate or cinnamon. The user is therefore presented with two questions for mum that were not displayed for dad:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-six.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-seven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-eight.png)

Similarly, in the user journey above, dad is specified as a tabby and is therefore asked whether he carries a non-tabby gene:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-two.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-three.png)

By contrast, mum is specified as non-tabby. Tabby is dominant and so a non-tabby cannot have any tabby genes, so the non-tabby question is skipped:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-nine.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-ten.png)

In another example, dad is specified as non-pointed. Like tabby, colourpoint is dominant and so a non-pointed cat cannot carry colourpoint. Therefore, having selected that dad is non-pointed the user moves straight to entering mum's traits:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-five.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-six.png)

By contrast, mum is entered as colourpoint and so the user is asked whether she carries an additional colourpoint gene:

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-eleven.png)

![Question displayed with answer buttons to capture genetic traits of each parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/journeys/questions-uj-twelve.png)

**As a British shorthair hobby breeder, I want the application to ensure that I select the right number of traits for each question, so that it can accurately calculate my kittens**
This user story is satisfied by the Answer Buttons feature as described in the Features section of [README.md](README.md). None of the questions in the application are set as multiselect questions, and therefore only one answer can be selected for each question. The following screenshots show an example of this on the base colour question:

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/answers-single-select-one.png)

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/answers-single-select-two.png)

The following screenshots show an example of this for the dilute question:

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/answers-single-select-three.png)

![Testing that only single selections are allowed](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/answers-single-select-four.png)

**As a British shorthair hobby breeder, I want to be able to return to previous questions, so that I can correct my answers without having to start again**
This user story is satisfied by the Previous Step feature as described in the Features section of [README.md](README.md). This button is shown below.
![Answer selected for dilute question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/dilute-question-selection.png)

Evidence that this button works as expected is provided as part of testing for the next user story.

**As a British shorthair hobby breeder, I want the application to forget answers I gave to subsequent questions if I return to previous questions, so that I can reanswer the questions correctly based on my updated choices**
This user story is satisfied by the second part of the Previous Step feature as described in the Features section of [README.md](README.md). The following screenshot shows the internal state of the application when the user has selected the first answer for the second question (arrays are zero-indexed in JavaScript so the first question and answer each have an index of 0 and so on):

![The model state after selecting "Yes" for the dilute question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/model-state-dilute-question.png)

If the user changes their answer to the previous question (click back and then change answer), their answer to any subsequent questions is forgotten:

![The model state after changing answers to the previous base colour question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/model-state-after-answer-change.png)

**As a British shorthair hobby breeder, I want to confirm once I have entered all information for both mum and dad, so that the kitten results can be calculated**
To satisfy this user story, a calculate kittens button is shown to the user only once the application has all required information. The following screenshot shows the final question screen before an answer has been selected:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/calculate-button-not-shown.png)

The following screenshot shows the same screen after an answer has been selected:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/calculate-button-shown.png)

As discussed above, the final question may not be shown to users in all situations. This is because the penultimate question is whether or not mum is colourpoint whereas the final question asks whether mum carries colourpoint. Since colourpoint is a dominant trait, the final question is only valid for colourpoint cats. The following screenshot therefore shows that the calculate kittens button is displayed on the penultimate question if the cat is indicated to be non-colourpoint:

![Testing that the calculate kittens button is only displayed once enough information is provided](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/calculate-button-shown-penultimate.png)

**As a British shorthair hobby breeder, I want the application to clearly indicate when it is calculating kitten results, so that I can be sure it hasn't crashed**
This user story is satisfied by the Results Preloader feature as described in the Features section of [README.md](README.md). There is an animation and a countdown which confirms that the browser has not frozen. The following screenshots show the results preloader in action and confirms that it correctly counts down:

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/preloader-five.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/preloader-four.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/preloader-three.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/preloader-two.png)

![The preloader counting down from five to one](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/preloader-one.png)

Once the preloader countdown reaches zero, the results are displayed. This provides enough time for all kitten images to load in the background so the results display smoothly.

**As a British shorthair hobby breeder, I want to see the results of my kitten calculation, so that I know what kittens mum and dad could produce**
This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The functionality involved in calculating and displaying results on the screen is divided into two layers. The logic layer in logic.js provides the calculations to work out what phenotypes can be produced from a pairing between the given mum and dad, and to work out the probability of each phenotype being produced. Separately, the ui layer in ui.js is responsible for creating an answer button for each phenotype returned by the logic layer, and for ensuring the probability and phenotype image are correctly displayed for each. User story testing for this user story therefore focused on confirming that the output of the logic layer is correctly displayed on the screen. Automated testing was used (as described below) to confirm that the logic layer correctly calculates results.

The following screenshot shows the output of the logic layer for a reasonably complex calculation:

![Example results](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/kitten-calculation-results.png)

The following screenshot shows the results as displayed in the UI layer:

![Example results](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/results.png)

This example confirms that the UI layer is correctly displaying the output as calculated by the logic layer. Automated testing confirmed that the logic layer was correctly calculating results (see below).

**As a British shorthair hobby breeder, I want to see an image for each possible kitten phenotype, so that I know what that phenotype will look like**
This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The following screenshot shows that, for a complex calculation, the correct image is displayed for each kitten phenotype:

![Example results](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/results.png)

**As a British shorthair hobby breeder, I want to see the probability for each possible kitten phenotype, so that I know how likely it is that mum and dad will produce that type of kitten**
This user story is satisfied by the Kitten Results Display feature as described in the Features section of [README.md](README.md). The following screenshot shows that, for a complex calculation, the correct probability is displayed for each kitten:

![Example results](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/results.png)

**As a British shorthair hobby breeder, I want to be able to start the calculator again once I have reviewed my results, so that I can calculate the kittens for a different pairing**
The following screenshots confirm that this user story is satisfied by the Start Again button as described in the Features section of [README.md](README.md).

![Results page showing option to start again](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/results.png)

![Start again](https://laura10101.github.io/kitten-calculator/assets/img/documentation/testing/start-again.png)

### Automated Tests

## Bugs

### Fixed Bugs

### Unresolved Bugs