# British Shorthair Kitten Calculator

British Shorthair cats are the most popular breed of cat in the UK. There is a large body of hobby breeders who enjoy raising kittens. However, feline genetics is a complicated area, and because the British Shorthair is available in a broad range of colours and patterns, it can be very difficult for breeders to predict what colour of kittens they will get from different parental pairings. 

This kitten calculator is designed for hobby breeders, who have a basic knowledge of cat colours and feline genetics. It assumes, therefore, that its users will already know the basic terminology for feline colours: blue is grey, chocolate is brown, cinnamon is a warm brown, and so on. In order to make the application as accessible as possible, I have also opted to have images of each of the different variations of cats that is possible from the genes that have been used. The application has a visual representation of the parent cat that changes as the user enters each gene. 

This means that even where a user is not aware that blue means grey, the visual representaion will make the application accessible. I used a recommended freelancer on Fiver to create these images for the project, in the colours and patterns that I chose, and provided photographs for. I am the owner of the copyright of these images. The images were bought with rights for full commerical use.

The kitten calculator will be placed on an existing website, that currently sells feline items and provides a blog. This application will help to keep people returning to the site, thereby helping to increase web traffic. The website in question is also a member of the Amazon Affiliate Marketing scheme, so an increase in web traffic may lead to an increase in  income through that scheme. It will also assist with establishing the website as a trusted source of expert information.

![Am I responsive?](https://laura10101.github.io/kitten-calculator/documentation/features/am-i-responsive.png)

## Users
Users will be British Shorthair breeders. Some will be new to breeding, or just considering breeding, and therefore not have any knowledge beyond the most basic terminology. Others will be more experienced, understand all the terminology and be able to calculate the colour of kittens themselves, but want a quicker or easier way of achieving it. 

This website presents an interesting exercise in user experience. For a very experienced breeder who understands feline genetics at a high level, there is a risk that images and explanations will simply crowd the page, reducing user experience. For a total novice who knows nothing about feline genetics, the more information the site provides, the better the user experience will be. 

The key in optimising user experience, therefore, is to try to gauge what level of genetic knowledge the majority of users will have, and aim to optimise user experience for that level of knowledge. Since this question was so vital to creating optimal user experience, I conducted a small survey of 20 breeders and found that only 5% had extensive knowledge of feline genetics. The vast majority (85%) understood the basic terminology of coat colour (e.g. blue means grey), and the dominance of basic colours in practice, but did not fully understand the theory of recessive and dominant genes. 

A small number of breeders (10%), did not understand basic terminology or the hierarchy of colour dominance. 

I therefore chose to optimise user experience for those with a basic understanding of genetics in practice, whilst including images to assist total novices. This combiantion should provide optimal customer experience for the greatest number of users, by catering to 95% of potential users. This approach should optimise the avhievement of one of the main objectives of the site: an increasing in web traffic. 

It may be that this site is not well suited to experienced breeders with expert knowledge of feline genetics. In future, I may create a second, ‘advanced’ version of this calculator that is aimed at experts and has a far more simple, ‘to the point’ user experience that simply allows a quick calculation to be performed without the fuss of images and where the more complex aspects of feline genetics are addressed through a more in-depth explanation. 

## User Stories 
As a British Shorthair hobby breeder:
- I want to see an introduction explaining how the calculator will work, so that I understand how to use it;
- I need to be able to enter the genetic traits for both mum and dad, so that their kitten phenotypes and probabilities can be calculated;
- I want to see an image of each parent's phenotype as I enter their traits, so that I know what I have input so far;
- I want to see an illustration showing the trait for each answer, so that I can understand which trait best matches my cat;
- I want the application to prevent me from inputting invalid combinations of traits, so that I only see kittens that my cats can actually produce;
- I want the application to ensure that I select the right number of traits for each question, so that it can accurately calculate my kittens;
- I want to be able to return to previous questions, so that I can correct my answers without having to start again;
- I want the application to forget answers I gave to subsequent questions if I return to previous questions, so that I can reanswer the questions correctly based on my updated choices;
- I want to confirm once I have entered all information for both mum and dad, so that the kitten results can be calculated;
- I want the application to clearly indicate when it is calculating kitten results, so that I can be sure it hasn't crashed;
- I want to see the results of my kitten calculation, so that I know what kittens mum and dad could produce;
- I want to see an image for each possible kitten phenotype, so that I know what that phenotype will look like;
- I want to see the probability for each possible kitten phenotype, so that I know how likely it is that mum and dad will produce that type of kitten;
- I want to be able to start the calculator again once I have reviewed my results, so that I can calculate the kittens for a different pairing.

## UX

### Colour Scheme
The existing website where this application will be deployed is not targeted solely at cat breeders. It is a feline-focused website, which sells items and provides information. I looked at the web statistics for the past 12 months on Google Analytics to get information about the demographics of its typical user. The website is predominantly used by female: 66.6% of users are female. 

![Google Analytics: Users by Gender](https://laura10101.github.io/kitten-calculator/documentation/readme/ga-users-by-gender.png)

The most common age of users is 25-34, followed by 18-34 and 35-44. It is notable that Google Analytics was only able to collect demographic data for just under 25% of the total sessions, so this data may not be accurate across all of the sessions. Nevertheless, this still comprised around 25,000 sessions where age was recorded, making it a reasonably good sized data set. It shows a clear trend for typical sex and age range within the sample that we have available.

![Google Analytics: Users by Age](https://laura10101.github.io/kitten-calculator/documentation/readme/ga-users-by-age.png)

Millennials are generally considered to be between the ages of 26-40 (Gallup) whilst Gen Z-ers are considered to be age 10-25 (Gallup). These two generational groups therefore represent the bulk of the total user demographic for this website, comprising around 70% of the total session count. 

This gave a clear steer for the user experience and branding for the application. A major part of the design was choosing the visual representations of the cat colours. It was important that the colours used complimented the cat images, and did not fight with or overpower them. This ensured that the cat images remained the central focus of the application. This design decision helped to inform the colour palette choice. Modern, on-trend colours were used to reflect current design trends: I opted for a slightly retro, 90’s inspired, cartoon-esque feel. The colour scheme also reflects the playful and 'cute' subject matter of the site: kittens!

Ease of use was also a major consideration. This is a practical application that aims to encourage people to utilise it repeatedly. As a result, a positive user experience was critical. Colours were chosen to make navigation of the application as easy as possible, with good contrast between sections, easy to see buttons with responsive elements so the user was clear when a button was clicked and selected or deselected.

I identified a pastel shade of blue and then used W3 Schools colour picker to [select different colours](https://www.w3schools.com/colors/colors_picker.asp) of the same tone. This created a soft, cohesive feel to the colour scheme with a high level of harmony, which was important for a consistent user experience.

The colour palette is shown below: 

- Coral: #e7b7b 
- Mint: #7befb5
- Lilac: #c491ef
- Candy pink: #f070a1
- Periwinkle blue: #799aef

![Colour Palette](https://laura10101.github.io/kitten-calculator/documentation/readme/colour-palette.png)

### Typography
Ease of use was the primary consideration for the typography. For this reason, text was kept black. Arial was used as the primary font, with Helvetica as the web-safe font and Sans-sarif as a fallback font. This ensured that the typography was simple and easy to read so that users could navigate the application easily. 

### Imagery
Providing users with a visual representation of the different cat traits was a key feature to make the application more intuitive for the target users. The images used to represent the different traits were a critical part of the design. I considered using photographs but it would have been almost impossible to find photographs that had enough continuity of style to provide a consistent user experience, which was vital for the flow of the application. After some research, I decided on using illustrations in a cute, slightly manga-inspired cartoon style.The images were commissioned by me, with all rights including commercial rights being purchased, making me the legal owner of these images.

It was important to keep the background simple without being boring so that it did not distract from the functionality. To achieve this, I chose to create a gradient in the website colour palette. This allowed me to add some interest to the background, in line with the cute, cartoon, retro feel of the theme, whilst maintaining a simple feel that would not distract from the application. I used [Colorzilla's Ultimate CSS Gradient Generator](https://www.colorzilla.com/gradient-editor/) for this.

### Wireframes
These wireframes were produced at the very beginning of planning the project. There have been some changes to the design since they were done. The most notable change is that there is now an image of a cat at the top of the page which represents the parent cat that the user is currently creating or inputting. This image changes as the user inputs the different colours/patterns. I felt this was an important addition to the application to make it more interactive but also to allow users with little to no knowledge of feline genetics to use the application. Users can simply look at the image they are ‘building’ and instantly know whether that image is representative of the cat they have in mind. This visual representation allowed me to remove the need for written explanatory notes, which has made the application a lot simpler and more visually pleasing. My initial plan was to include explanatory notes, but I soon realised that the nature of feline geentics meant that I would have needed to add so many notes that it would have overpowered the application and significnatly diminished user experience. 

I also decided to add additional questions in to the calculator to improve the quality of the calculation results. The display of these additional questions was in line with the wireframes below.

The following wireframes show the main user journey through the application:

When the user first lands on the application, a welcome message is displayed to explain the purpose and use of the kitten calculator. From here, the user can click 'Start' to begin the kitten calculation process:

![Welcome section](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-one.jpg)

The first step of the kitten calculation process is to select the base colour for the first parent as shown below:

![Base colour - widescreen format](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-two.jpg)

The following wireframe shows how the first question would look on a mobile device:

![Base colour - mobile](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-three.jpg)

The second question is to determine whether the parent is a tabby as shown below:

![Tabby](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-four.jpg)

The third question is to determine whether the parent carries a recessive non-tabby gene:

![Non-tabby](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-five.jpg)

The fourth question is to determine whether the parent is a colourpoint, which is recessive:

![Colourpoint](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-six.jpg)

The fifth question asks whether the parent carries a single recessive colourpoint gene. This question is conditional on the prior question being answered in the negative, so it is only displayed to the user if the user selects 'non pointed' for the previous question:

![Carries colourpoint](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-seven.jpg)

The sixth question checks whether the parent has one, two, or no white spotting genes:

![White spotting genes](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-eight.jpg)

Once the user has confirmed the answer to the sixth question for the first parent, the same questions are then repeated for the second parent. Once both parents have been fully input, the application displays a 'Calculate kittens' button as indicated in the above wireframe.

When the user clicks this button, a preloader will be displayed as shown below while the results are being calculated:

![Results preloader](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-nine.jpg)

This preloader was enhanced during development by the addition of a countdown.

Once all results have been calculated and loaded, they are displayed to the user as shown below:

![Results are displayed](https://laura10101.github.io/kitten-calculator/documentation/wireframes/wireframe-ten.jpg)

## Features

### Existing Features

- __Introductory Section__
  - The application displays a detailed introduction when the user first lands on the page, and when they press the 'Start again' button.
  - This provides the user with information about the purpose of the application and usage instructions.
  - The user can choose when to start the kitten calculation process by pressing the 'Start' button.
  ![Introductory section](https://laura10101.github.io/kitten-calculator/documentation/features/introductory-section.png)

- __Parent Genotype Questions__
  - Once the kitten calculation process has started, the user is presented with a series of questions to gather information about each parent.
  - The same questions are firstly asked for dad, and then for mum.
  - A message at the top of this section lets the user know which parent they are currently inputting.
  - The user can choose answers to the questions by selecting the answer buttons at the bottom of the screen.
  - The application guides the user through a series of questions until it has enough information about each parent.

  ![Base colour question for dad](https://laura10101.github.io/kitten-calculator/documentation/features/base-colour-dad.png)

  ![Tabby question for dad](https://laura10101.github.io/kitten-calculator/documentation/features/tabby-dad.png)

  ![Carries tabby question for dad](https://laura10101.github.io/kitten-calculator/documentation/features/carries-tabby-dad.png)

  ![Base colour question for mum](https://laura10101.github.io/kitten-calculator/documentation/features/base-colour-mum.png)

  ![Tabby question for mum](https://laura10101.github.io/kitten-calculator/documentation/features/tabby-mum.png)

- __Answer Buttons__
  - For each question, the application displays a set of buttons that allow the user to choose appropriate answers to the question.
  - This prevents the user from entering invalid input, as they are restricted to the available options.
  - Images on each answer button illustrate the trait represented by that answer.
  - The answer button changes colour to mint green when hovered over, and changes colour again to candy pink when selected, to illustrate to the user the current button state.

  ![Answer buttons](https://laura10101.github.io/kitten-calculator/documentation/features/answer-buttons.png)

- __Question and Answer Filtering__
  - Each question and its associated answers has a (possibly empty) set of preconditions.
  - These preconditions allow questions and answers to be filtered based on the answers given to earlier questions.
  - This mechanism prevents the user from inputting impossible genetic combinations by ensuring only valid answers can be selected.
  - The first of the following examples shows that when dad's base colour is black, the user can specify that he carries the chocolate or cinnamon gene, but not both.
  - The second example shows that when dad's base colour is chocolate, the user can only specify that dad carries cinnamon.
  - This reflects the genetic reality: a black cat can carry either chocolate or cinnamon, but not both. A chocolate cat can carry cinnamon. 
  - Likewise, only a non-dilute (black, chocolate, or cinnamon) selection will result in the question 'Does this cat carry dilute?'. Blue, lilac and fawn cats are homozygous dilute, so we do not need to ascertain whether they carry the gene: we already know their full genetic status for that trait. Conditional questions thereby remove the chance of a user inputting incorect or impossible genetic combinations. Given that most users of the application will likely not have a high degree of knowledge of feline genetics, this is especially important. 

  ![Colours carried options for a black parent](https://laura10101.github.io/kitten-calculator/documentation/features/black-dad-carry-options.png)

  ![Colours carried options for a chocolate parent](https://laura10101.github.io/kitten-calculator/documentation/features/chocolate-dad-carry-options.png)

- __Parent Phenotype Display__
  - To assist the user in accurately entering each parent's traits, a phenotype display is provided at the top of each question.
  - The phenotype display shows an image which represents what the parent that is currently being entered will be, based on the information provided so far.
  - As the user selects each answer, this display will update to reflect the parent's phenotype based on the current selection.
  - The following screenshots show the phenotype display for a chocolate parent when the "bicolour" option is selected, versus when the "van" option is selected for the white spotting gene.

  ![Phenotype display for a chocolate bicolour parent](https://laura10101.github.io/kitten-calculator/documentation/features/chocolate-bicolour-dad-phenotype.png)

  ![Phenotype display for a chocolate van parent](https://laura10101.github.io/kitten-calculator/documentation/features/chocolate-van-dad-phenotype.png)


- __Previous Step Button__
  - A previous step button is provided to allow the user to return to previous questions if they are unhappy with the answer they provided.
  - Having returned to a previous question, if the user changes their answer to that question all the answers they have provided to any subsequent questions are forgotten.
  - This is important because if the user changes an earlier answer, the answer they gave to a subsequent question may no longer be valid.
  - This is the result of the question and answer filtering above.
  - The following example shows the "Previous Step" button on the second question with the answer "Yes" selected. The user then presses previous step to return to the first question.
  - The screenshot below shows the user interface with "Yes" selected for question two.
  ![Answer selected for dilute question](https://laura10101.github.io/kitten-calculator/documentation/features/dilute-question-selection.png)

  - The screenshot below shows the application's internal state when on the second question with "Yes" selected.

  ![The model state after selecting "Yes" for the dilute question](https://laura10101.github.io/kitten-calculator/documentation/features/model-state-dilute-question.png)

  - The screenshot below shows the application's internal state after selecting a different option on the previous question. Note that the answer to question 2 has now been removed.

  ![The model state after changing answers to the previous base colour question](https://laura10101.github.io/kitten-calculator/documentation/features/model-state-after-answer-change.png)
  
- __Results Preloader__
  - When the user has finished entering all the required information for dad and mum, and has clicked the "Calculate kittens" button, a preloader is displayed while the kitten results are being calculated.
  - The preloader shows an animation to illustrate that the browser has not crashed.
  - The preloader also display a countdown to let the user know how long it will be until their results are ready.
  - Primarily this serves a functional purpose, but it also a psychological one. Psychological studies tell us that humans tend to have more trust in complex computer calculations where they have taken some time to 'process'. Having a small delay of a few seconds therefore increases users' perceived value of the process, and trust in it. Additionally, having the countdown helps to build a sense of excitement as people wait to find out what colour kittens they can expect. 
  ![The results preloader](https://laura10101.github.io/kitten-calculator/documentation/features/results-countdown.png)

- __Kitten Results Display__
  - Once the kitten results have been calculated, they are displayed to the user through the results display.
  - The results display shows all of the phenotypes that could be produced by pairing the entered mum and dad.
  - Images are displayed showing what each phenotype will look like.
  - Additionally, the probability of that phenotype being produced by the pairing of mum and dad is displayed.
  - The textual description of the phenotype is also displayed.
  - This allows the user to understand the range of kittens they could get from mum and dad, and the likelihood of each.
  ![Example results](https://laura10101.github.io/kitten-calculator/documentation/features/results.png)

- __Start Again Button__
  - Once the user has finished reviewing the calculated results, they can start a new calculation by clicking the 'Start Again' button.
  - This returns the user to the introductory section to remind them of the instructions for using the calculator.

- __Accessibility__
All images have accurate and descriptive alt attributes to improve accessibility. Nevertheless, because of the design decision that was made to base the calculator heavily on visual representations rather than on detailed written explanatory notes, there is scope for further improvement to make the application more accesible to people who are visually impaired. With more time, I would create an additional version of the calculator that offers far more detailed written descriptions and explanations that could be read aloud by a text reader. This would offer more information to those who are eager to learn, and serve as a more accessible application to those with virual impairments.

### Features Left to Implement
The most obvious addition to this application would be to include additioanl feline genes. As a result of time constraints, and the complexity of the algorithmic solutions, I had to constrain the peoject to the main and most common feline genes. With more time I would include all of the relevant feline genes: red, tortie, longhair, the inhibitor gene, tabby pattern, the wide-band gene, the odd-eyed gene...the list goes on! These will be added to the calculator over time. 

At the moment the calculator only calculates the phenotype of the kittens. It does not tell the user what genotypes the kittens might have, i.e. what recessive genes the kittens from any given pairing might carry. This could be a useful addition for breeders, who are considering their breeding programmes over muleiple generations. It would, however, make the final results screen more complex, with far more potential kittens needing to be displayed. Since most users are unlikely to want to know what recessive genes might be carried, the implementation of this addition would need to be considered very carefully. An additional button 'Calculate kitten genotypes' could be displayed, perhaps labelled in a more descriptive fashion. This would allow only those users who were interested in the potential genotypes to see the additional information, keeping the user experience as simple and streamlined as possible for other users. 

Additionally, the application could be used to request that cat owners send genetic tests from their cats to research centres who are currently investigating the more complex genetic issues. This would help to improve the understanding of the feline genome, and identify additional genetic mutations as they arise. In this way, it could be used not only for colour genetics, but also to highlight genetic health problems within the breed and collect data for researchers.  This could be achieved by having a page on the website that lists the current research projects in feline genetics, along with instructions on how to obtain and send a genetic swab to each project. An additional range of functions could be created to assist with this: when a user entered a ‘gene of interest’ into the calculator, it could display a message, explaining that their cat was of scientific interest and pointing them to the relevant page and research project. 

With more time, the application could be further developed by the creation of kitten calculators for other cat breeds, and other species (e.g. dogs, rabbits and even hamsters are commonly bred). As the basic genetic rules will be largely the same, similar algorithms can be used to create those additional calculators. This would increase web traffic further and allow more research projects to be highlighted. 

Another potential addition would be a progress bar, so that users can see how far through the process they are and how many more questions they have to answer. As more genes are added to the calculator this will become more important. The complexity would be that many of the questions are conditional on previous answers, so the progress bar would need to either be highly responsive, or pair the questions into groupings/sections. The addition of a progress bar would need careful consideration to ensure that it did not detract from user experience or confuse people rather than helping improve the experience. 

I would also like to display the preloader and countdown with a custom made cartoon animation that would tie into the overall theme of the application. Perhaps a stork flying in with a basket full of kittens. 

I would like to include an information logo on each question that then linked to an animated YouTube video in which the genetic trait was explained in detail. This would involve a large amount of work in order to produce the animation, but would be a significant value-add. One video could be produced, with each genetic trait time stamped within the video so that it could be linked directly to. This would allow the user to either watch the entire video, or to only watch the specific section they are interested in. An easier function, that would achieve a similar outcome but at a greatly reduced cost, would be to make each genetic trait clickable, with a link that opens a new window featuring an article about the genetic trait that has been clicked on. 

This application could then be developed into a more encompassing website by including a blog or articles page. The blog would contain further explanations about cat genetics and could explore a range of topics. These topics could range from basic explanations to highly complex areas like the inhibitor gene and bimetallic cats, neither of which are fully understood by the scientific community yet. 

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

The following educational and community resources were used during the implementation of this application:

- W3 Schools
- Stack Overflow
- CSS Tricks
- [HTML Living Standard](https://html.spec.whatwg.org/)

Additionally, assistance was provided by my Code Institute tutor, and by the Code Institute Slack community.

### Code
Code libraries or snippets were used in whole or in part from the following sources:

- All JavaScript code was 

### Content
All written content is original and created by me for this application. See below sections for information on images.

### Media
The following resources were used during the creation of this application: 

- Feraichi on Fiver, who I commissioned to produce the cat images for this project (they were bought with all rights, including rights for commercial use and I am the legal owner of them)
- Paint 3D, which I used to create some additional images that I had inadvertently missed off the original list

## Acknowledgements
I would like to thank the following people for their support in implementing this project:

- My mentor, Tim Nelson, for his help, encouragement and guidance throughout. He is one of those rare people in the world who have an energising effect on those around them....something much needed and appreciated when swimming in algorithms! 
- The Code Institute community on Slack for their helpful guidance.