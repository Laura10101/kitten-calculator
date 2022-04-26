# British Shorthair Kitten Calculator

British Shorthair cats are the most popular breed of cat in the UK. There is a large body of hobby breeders who enjoy raising kittens. However, feline genetics is a complicated area, and because the British Shorthair is available in a broad range of colours and patterns, it can be very difficult for breeders to predict what colour of kittens they will get from their cats. 

This kitten calculator is designed for hobby breeders, who have a basic knowledge of cat colours and feline genetics. It assumes, therefore, that its users will already know the basic terminology for feline colours: blue is grey, chocolate is brown, cinnamon is a warm brown, and so on. In order to make the application as accessible as possible, I have also opted to have images of each of the different variations of cats that is possible from the genes that have been used. This means that even where a user is not aware that blue means grey, there will be a visual representation of each colour and pattern. I used a recommended freelancer on Fiver to create these for the project, in the colours and patterns that I determined and provided photographs for. I am the owner of the copyright of these images since they were paid for with full commercial rights for use. 

The kitten calculator will be placed on an existing website. It will keep people returning to the site, thereby helping to increase web traffic. The website in question is a member of the Amazon Affiliate Marketing scheme, so an increase in web traffic may lead to an increase in site income through that scheme. It will also assist with establishing the website as a trusted source of expert information. 

## Users
Users will be British Shorthair breeders. Some will be new to breeding, or just considering breeding, and therefore not have any knowledge beyond the most basic terminology. Others will be more experienced, understand all the terminology and be able to calculate the colour of kittens themselves, but want a quicker or easier way of achieving it. 

This website presents an interesting exercise in user experience. For a very experienced breeder who understands feline genetics at a high level, there is a risk that images and explanations will simply crowd the page, reducing user experience. For a total novice who knows nothing about feline genetics, the more information the site provides, the better the user experience will be. 

The key in optimising user experience, therefore, is to try to gauge what level of genetic knowledge the majority of users will have, and aim to optimise user experience for that level of knowledge. Since this question was so vital to creating optimal user experience, I conducted a small survey of 20 breeders and found that only 5% had extensive knowledge of feline genetics. The vast majority understood basic terminology of coat colour (e.g. blue means grey), and understood the dominance of basic colours in practice, but did not fully understand the theory of recessive and dominant genes. 

A small number of breeders (10%), did not understand basic terminology or the hierarchy of colour dominance. 

I therefore chose to optimise user experience for those with a basic understanding of genetics in practice, whilst including images for the total novices, since this should provide optimal customer experience for the greatest number of users. This approach should allow the primary objective of increasing web traffic to be met. 

It may be that this site is not well suited to experienced breeders with expert knowledge of feline genetics. In future, I may create a second, ‘advanced’ version of this calculator that is aimed at experts and has a far more simple, ‘to the point’ user experience that simply allows a quick calculation to be performed without the fuss of explanations and images. 

## User Stories 
As a British Shorthair hobby breeder:
- I want to see an introduction explaining how the calculator will work, so that I understand how to use it
- I need to be able to enter the genetic traits for both mum and dad, so that their kitten phenotypes and probabilities can be calculated
- I want to see an image of each parent's phenotype as I enter their traits, so that I know what I have input so far
- I want to see an illustration showing the trait for each answer, so that I can understand which trait best matches my cat
- I want the application to prevent me from inputing invalid combinations of traits, so that I only see kittens that my cats can actually produce 
- I want the application to ensure that I select the right number of traits for each question, so that it can accurately calculate my kittens
- I want to be able to return to previous questions, so that I can correct my answers without having to start again
- I want the application to forget answers I gave to subsequent questions if I return to previous questions, so that I can reanswer the questions correctly based on my updated choices
- I want to confirm once I have entered all information for both mum and dad, so that the kitten results can be calculated
- I want the application to clearly indicate when it is calculating kitten results, so that I can be sure it hasn't crashed
- I want to see the results of my kitten calculation, so that I know what kittens mum and dad could produce
- I want to see an image for each possible kitten phenotype, so that I know what that phenotype will look like
- I want to see the probability for each possible kitten phenotype, so that I know how likely it is that mum and dad will produce that type of kitten
- I want to be able to start the calculator again once I have reviewed my results, so that I can calculate the kittens for a different pairing

## UX

### Colour Scheme
The existing website is not targeted solely at cat breeders. It is a feline-focused website, so I looked at the statistics for the past 12 months on google analytics to get information about the demographics of its typical user. The website is predominantly used by female users with 66.6% of users being female. 

![Google Analytics: Users by Gender](https://laura10101.github.io/kitten-calculator/assets/img/documentation/readme/ga-users-by-gender.png)

The most common age of users is 25-34, followed by 18-34 and 35-44. It is notable that Google Analytics was only able to collect age data for just under 25% of the total sessions, so this data may not be accurate across all of the sessions. Nevertheless, this still comprised around 25,000 sessions where age was recorded, making it a reasonably good sized data set. It shows a clear trend for typical age range within the sample that we have available.

![Google Analytics: Users by Age](https://laura10101.github.io/kitten-calculator/assets/img/documentation/readme/ga-users-by-age.png)

Millennials are generally considered to be between the ages of 26-40 (Gallup) whilst Gen Z-ers are considered to be age 10-25 (Gallup). These two generational groups therefore represent the bulk of the total user demographic for this client, comprising around 70% of the total session count. 

This gave a clear steer for the user experience and branding for the application. A major part of the design was choosing the visual representations of the cat colours. It was important that the colours used complimented the cat images, and did not fight with or overpower them, so that the cat images remain the central focus of the application.  This design decision helped to inform the colour palette choice. Modern, on-trend colours were used to reflect current design trends: I opted for a slightly retro, 90’s inspired, cartoon-esque feel.

Ease of use was also a major consideration. This is a practical application and therefore a positive user experience was critical. Colours were chosen to make navigation of the application as easy as possible, with good contrast between sections, easy to see buttons with responsive elements so the user was clear when a button was clicked and selected or deselected.

I identified a pastel shade of blue and then used w3 schools colour picker to [select different colours](https://www.w3schools.com/colors/colors_picker.asp) of the same tone. This created a soft, cohesive feel to the colour scheme with a high level of harmony, which was important for a consistent user experience.

The colour palette is shown below: 

Coral: #e7b7b 
Mint: #7befb5
Lilac: #c491ef
Candy pink: #f070a1
Periwinkle blue: #799aef

![Colour Palette](https://laura10101.github.io/kitten-calculator/assets/img/documentation/readme/colour-palette.png)

### Typography
Ease of use was the primary consideration for the typography. For this reason, text was kept black. Arial was used as the primary font, with Helvetica as the web-safe font and Sans-sarif as a fallback font. This ensured that the typography was simple and easy to read so that users could navigate the application easily. 

### Imagery
Providing users with a visual representation of the different cat traits was a key feature to make the application more intuitive for the target users. The images used to represent the different traits were a critical part of the design. I considered using photographs but it would have been almost impossible to find photographs that had enough continuity of style to provide a consistent user experience, which was vital for the flow of the application. After some research, I decided on using illustrations in a cute, slightly manga-inspired style.The images were commissioned by me, and paid for with a full licence for commercial use so I am the owner of these images.

It was important to keep the background simple without being boring so that it did not distract from the functionality. To achieve this, I chose to create a gradient in the website colour palette. This allowed me to add some interest to the background, in line with the cute, cartoon, retro feel of the theme, whilst maintaining a simple feel that would not distract from the application. I used [Colorzilla's Ultimate CSS Gradient Generator](https://www.colorzilla.com/gradient-editor/) for this.

### Wireframes
These wireframes were produced at the very beginning of planning the project. There have been some changes to the design since they were done. The most notable change is that there is now an image of a cat at the top of the page which represents the parent cat that the user is currently creating or inputting. This image changes as the user inputs the different colours/patterns. I felt this was an important addition to the application to make it more interactive but also to allow users with little to no knowledge of feline genetics to use the application. Users can simply look at the image they are ‘building’ and instantly know whether that image is representative of the cat they have in mind. This visual representation allowed me to remove the need for written explanatory notes, which has made the application a lot simpler and more visually pleasing.

I decided to add additional questions in to the calculator to improve the quality of the calculation results. However, the display of these additional questions was in line with the wireframes below.

The following wireframes show the main user journey through the application.

When the user first lands on the application, a welcome message is displayed to explain the purpose and use of the kitten calculator. From here, the user can click start to begin the kitten calculation process:

![Welcome section](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-one.png)

The first step of the kitten calculation process is to select the base colour for the first parent as shown below:

![Base colour - widescreen format](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-two.png)

The following wireframe shows how the first question would look on a mobile device:

![Base colour - mobile](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-three.png)

The second question is to determine whether the parent is a tabby as shown below:

![Tabby](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-four.png)

The third question is to determine whether the parent carries a recessive non-tabby gene:

![Non-tabby](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-five.png)

The fourth question is to determine whether the parent is a colourpoint, which is recessive:

![Colourpoint](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-six.png)

The fifth question asks whether the parent carries a single recessive colourpoint gene. This question is conditional on the prior question being answered in the negative:

![Carries colourpoint](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-seven.png)

The sixth question checks whether the parent has one, two, or no white spotting genes:

![White spotting genes](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-eight.png)

Once the user has confirmed the answer to the sixth question for the first parent, the same questions are then repeated for the second parent. Once both parents have been fully input, the application displays a calculate kittens button as indicated in the above wireframe.

When the user clicks this button, a preloader will be displayed as shown below while the results are being calculated:

![Results preloader](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-nine.png)

This preloader was enhanced during development by the addition of a countdown.

Once all results have been calculated and loaded, they are displayed to the user as shown below:

![Results are displayed](https://laura10101.github.io/kitten-calculator/assets/img/documentation/wireframes/wireframe-ten.png)

## Features

### Existing Features

- __Introductory Section__
  - The application displays a detailed introduction when the user first lands on the page, and when they press the start again button.
  - This provides the user with information about the purpose of the application and usage instructions.
  - The user can choose when to start the kitten calculation process by pressing the start button.
  ![Introductory section](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/introductory-section.png)

- __Parent Genotype Questions__
  - Once the kitten calculation process has started, the user is presented with a series of questions to gather information about each parent.
  - The same questions are firstly asked for dad, and then for mum.
  - A message at the top of this section lets the user know which parent they are currently inputting.
  - The user can choose answers to the questions by selecting the answer buttons at the bottom of the screen.
  - The application guides the user through a series of questions until it has enough information about each parent.

  ![Base colour question for dad](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/base-colour-dad.png)

  ![Tabby question for dad](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/tabby-dad.png)

  ![Carries tabby question for dad](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/carries-tabby-dad.png)

  ![Base colour question for mum](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/base-colour-mum.png)

  ![Tabby question for mum](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/tabby-mum.png)

- __Answer Buttons__
  - For each question, the application displays a set of buttons that allow the user to choose appropriate answers to the question.
  - This prevents the user from entering invalid input, as they are restricted to the available options.
  - Images on each answer button illustrate the trait represented by that answer.
  - The answer button changes colour when selected, and on hover, to illustrate to the user the current button state.

  ![Answer buttons](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/answer-buttons.png)

- __Question and Answer Filtering__
  - Each question and its associated answers has a (possibly empty) set of preconditions.
  - These preconditions allow questions and answers to be filtered based on the answers given to earlier questions.
  - This mechanism prevents the user from inputing impossible genetic combinations by ensuring only valid answers can be selected.
  - The first of the following examples shows that when dad's base colour is black, the user can specify that he additionally carries chocolate or cinnamon genes.
  - The second example shows that when dad's base colour is chocolate, the user can only specify that dad carries cinnamon.

  ![Colours carried options for a black parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/black-dad-carry-options.png)

  ![Colours carried options for a chocolate parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/chocolate-dad-carry-options.png)

- __Parent Phenotype Display__
  - To assist the user in accurately entering each parent's traits, a phenotype display is provided at the top of each question.
  - The phenotype display shows an image which represents what the parent that is currently being entered will be, based on the information provided so far.
  - As the user selects each answer, this display will update to reflect the parent's phenotype based on the current selection.
  - The following screenshots show the phenotype display for a chocolate parent when the "bicolour" option is selected, versus when the "van" option is selected for the white spotting gene.

  ![Phenotype display for a chocolate bicolour parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/chocolate-bicolour-dad-phenotype.png)

  ![Phenotype display for a chocolate van parent](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/chocolate-van-dad-phenotype.png)


- __Previous Question Buttons__
  - A previous question button is provided to allow the user to return to previous questions if they are unhappy with the answer they provided.
  - Having returned to a previous question, if the user changes their answer to that question all the answers they have provided to any subsequent questions are forgotten.
  - This is important because if the user changes an earlier answer, the answer they gave to a subsequent question may no longer be valid.
  - This is the result of the question and answer filtering above.
  - The following example shows the "previous step" button on the second question with the answer "Yes" selected. The user then presses previous step to return to the first question.
  - The screenshot below shows the user interface with "Yes" selected for question two.
  ![Answer selected for dilute question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/dilute-question-selection.png)

  - The screenshot below shows the application's internal state when on the second question with "Yes" selected.
  ![The model state after selecting "Yes" for the dilute question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/model-state-dilute-question.png)

  - The screenshot below shows the application's internal state after selecting a different option on the previous question. Note that the answer to question 2 has now been removed.
  ![The model state after changing answers to the previous base colour question](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/model-state-after-answer-change.png)
  
- __Results Preloader__
  - When the user has finished entering all the required information for dad and mum, and have clicked the "calculate" button, a preloader is displayed while the kitten results are being calculated.
  - The preloader shows an animation to illustrate that the browser has not crashed.
  - The preloader also display a countdown to let the user know how long it will be until their results are ready.
  ![The results preloader](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/results-countdown.png)

- __Kitten Results Display__
  - Once the kitten results have been calculated, they are displayed to the user through the results display.
  - The results display shows all of the phenotypes that could be produced by pairing the entered mum and dad.
  - Images are displayed showing what each phenotype will look like.
  - Additionally, the probability of that phenotype being produced by the pairing of mum and dad is displayed.
  - Furthermore, the textual description of the phenotype is shown.
  - This allows the user to understand the range of kittens they could get from mum and dad, and the likelihood of each.
  ![Example results](https://laura10101.github.io/kitten-calculator/assets/img/documentation/features/results.png)

- __Start Again Button__
  - Once the user has finished reviewing the calculated results, they can start a new calculation by clicking the start again button.
  - This returns the user to the introductory section to remind them of the instructions for using the calculator.

- __Accessibility__
All images have accurate alt attributes, allowing those with visual impairment to use the calculator. ??????????

### Features Left to Implement
This application could be developed into a more encompassing website by including a blog/articles page. The blog would contain further explanations about cat genetics and could explore a range of topics. These topics could range from basic explanations to highly complex areas like the inhibitor gene and bimetallic cats, neither of which are fully understood by science. 

Additionally, the application could be used to request that cat owners send genetic tests from their cats to research centres who are currently investigating the more complex genetic issues.  This would help to improve the understanding of the feline genome, and identify additional genetic mutations as they arise. In this way, it could be used not only for colour genetics, but also to highlight genetic health problems within the breed and collect data for researchers.  This could be achieved by having a page on the website that lists the current research projects in feline genetics, along with instructions on how to obtain and send a genetic swab to each project. An additional range of functions could be created to assist with this: when a user entered a ‘gene of interest’ into the calculator, it could display a message, explaining that their cat was of scientific interest and pointing them to the relevant page and research project. 

With more time, the application could be further developed by the creation of kitten calculators for other cat breeds, and other species (e.g. dogs, rabbits and even hamsters are commonly bred). As the basic genetic rules will be largely the same, similar algorithms can be used to create those additional calculators. This would increase web traffic further and allow more research projects to be highlighted. 

XXXXXXCalculate genotype of the kittensXXXXX 

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/Laura10101/kitten-calculator.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Laura10101/kitten-calculator)

## Credits

### Educational Resources

### Code

### Content

### Media

## Acknowledgements
I would like to thank the following people for their support in implementing this project:

- My mentor, Tim Nelson, for his help and guidance throughout.
- The Code Institute community on Slack for their helpful guidance.