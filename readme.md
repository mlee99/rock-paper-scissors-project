# Rock, Paper, and Scissors Game! 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Rock, paper, and scissors game is a simple fun game in which both the players have to make a rock, paper, or scissors. It has only two possible outcomes a draw, or a win for one player and a loss for the other player. We will be designing the game using JavaScript where a player will be playing against the computer. In total there will be 10 moves. The player has to choose one option among the rock, paper, and scissors. A random option will be generated from the computer’s side and the one who wins will get one point every time. After 10 moves are over the final result will be displayed on the screen with a button to restart the game. The game will be completely responsive so that it can be played on every device.

I went to geeksforgeeks.org and followed their [Rock, paper, and scissors game](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/).

### Screenshot

![Starting Page]()
![Reactive Counters and Messages]()
![End Page]()

### Links

- Solution URL: [Rock, Paper, Scissors solution](https://github.com/mlee99/)

## My process
    I started off with the HTML and CSS skeletons made within Geeks for Geeks. I reformatted the css files into scss to get some practice with that. Then I went ahead and made the first js file, "script.js".

    Followed the instructions as much as I could, and ended up having nothing work. I tried messing around with it a little longer, but couldn't figure it out. So I went ahead and finally looked at the construct js file on the web page (app.js). I read through briefly how they interpretted the instructions.

    The differences from my js script vs theirs:
    
    - I changed some stuff around after viewing their script, but I was using getElementsbyClass when using DOM manipulation, but I was using it entirely incorrectly. I learned more about those tools, and began using querySelector because it matches the formatting of css selectors
    - I only called the game() fucntion at the very end.
    - Didn't account of a few of the interactive messages.
    - Didn't know exactly how to manipulate the text using tools such as .innerText/.innerHTML.textContent

    I would say that I completed maybe about 60% of the project, but I was definitely able to learn a lot from the mistakes that I made and didn't include.

    Moving forward, I decided to remake a new script and apply what I learned within "redo.js". I peeked at their script, when I got hard stuck, or wanted to compare answers (such as logging their outcomes vs mine). A couple examples of what I checked:

    - I originally made the computerOptions exactly like the playerOptions, but this was wrong. It was wrong because, it was be getting its selection via a random number and not an action. So, you're required to manually insert the values within its array so that it may be indexed.

    - Within the winner function, nothing was matching up becuase the values were different. I asked myself, "Why won't my checks work?" Come to find out, the template script had a ".toLowerCase()" tool. This is used to ensure that the values are 1:1 in the checking process because while "==" will equal true if "42" & 42 are compared to each other, but I was using "===" and these check its entire value (its data type and content).

    After that, it was pretty much back and forth until completion. 

### Built with

- Semantic HTML5 markup
- CSS/Sass
- JS (ES6 notation used)

### What I learned

This project took me basically an entire working day to complete. I am very happy to complete my first interactive web application!

It took me about a couple weeks to learn the basics (syntax, mannerisms, and new ES6 stuff taught by CodeAcademy) because I wanted to do another project originally for Frontend Mentor. However, the main concepts I learn with this project are the following:

- DOM Manipulation
    - Going through the introductory lessons, CodeAcademy teaches you the basics. The translation over to the browser level, however, was not explained at all in my opinion. While it translates over through Object-Oriented Programming (OOP) concepts, it was still pretty difficult to then learn about functions like querySelector, getElementsbyClasses/getElementbyID, and addEventListener.
    - Refering to the question I asked in stackoverflow, DOM manipulation is going to be about 50% (or so I hear) of JS projects... so enjoy the ride.

- Global and Local variables
    - This is something that was really hammered down because there are a lot of functions (at least to me) and for the most part, each function has their own variables that are initalized and called. So I failed to manipulate other variables, because they were not in the scope of the respective function. The only global variables with the "moves" count and the scores of the player and the computer.

- Importance of actually invoking the function
    - You can make the function, but it won't work if you don't call it! Also, arguements don't always need to be established.


### Continued development

2/15 for newbie project! On to the next ones un

### Useful resources

- [Question](https://stackoverflow.com/questions/71720686/are-we-supposed-to-initialize-variables-in-js-regardless-of-a-value-being-set) that I had on stackoverflow when nothing was working.

- [What's Best: innerText vs. innerHTML vs. textContent](https://betterprogramming.pub/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc) ; Used this website when trying to decipher the differences between these different options.

- [W3 Schools](https://www.w3schools.com/) ; Used for references.

- [CodeAcademy](https://www.codecademy.com/learn/introduction-to-javascript) ; Taught me the basics of Javascript.

- [Geeks for Geeks](https://www.geeksforgeeks.org/) ; An alternative place to find projects that are similar to the ones in the premium section on CodeAcademy.

## Author

- Frontend Mentor - [@mlee99](https://www.frontendmentor.io/profile/mlee99)

## Acknowledgments

Thank you to CodeAcademy, and Youtube!