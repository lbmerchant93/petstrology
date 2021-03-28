# Petstrology [![Build Status](https://travis-ci.org/lbmerchant93/petstrology.svg?branch=main)](https://travis-ci.org/lbmerchant93/petstrology)
#### Turing School of Software Design - Mod3 Final Solo Project
The details of this project are outlined in [this project spec](https://frontend.turing.io/projects/module-3/niche-audience.html). This project was designed to demonstrate an understanding of React and Cypress after spending the last 5 weeks diving deeply into using them.

### Contributors
- Lucas Merchant : [github profile](https://github.com/lbmerchant93)

### Instructors: 
- Leta Keana : [github profile](https://github.com/letakeane)
- Scott Ertmer : [github profile](https://github.com/sertmer)

### Technologies

**Build**: React, React Router, CSS3

**Testing**: Cypress.js

**Deployment**: Vercel

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-petstrology)
4. [Challenges & Wins](#challenges-&-wins)

## Introduction
This project is the developer's final solo project in Module 3 of the Front-End Engineering program at Denver's Turing School of Software and Design. The idea behind this project is to demonstrate an understanding of React and Cypress after spending the last 5 weeks diving deeply into using them. Students were given creative freedom on design and theme, though the theme had to center around a niche audience. The target audience for this application was chosen to be users that want to use astrology as a way to understand their pets. Information retrieved from the aztro API.

## Setup Instructions
To run the project locally:
- `git clone` this repo 
- `cd` into the petstrology repo
- run `npm start` to run the React App in your browser

OR

The App has been deployed using Vercel. This way you don't have to clone it locally in order to use them! To visit either click the link below!
- [Pestrology App](https://petstrology.vercel.app/)

### Testing

Cypress.js was used to implement end-to-end-tests of the user flow. To run these tests, `cd` into the project repository and install Cypress by typing `npm i -D cypress` on the command line and adding 
```
"scripts": {
    "cypress:open": "cypress open"
  }
  ```
 to your `package.json` file.

 Then run `npm run cypress:open`

 Cypress.js should open a window with a list of test files. Click on a file name to run the tests in that file.

[Back to Top of Page](#table-of-contents)

---

## Using Petstrology


### Viewing a Horoscope
If you know the sign of the person or creature you're wondering about, then you can just select their sign from the ALL SIGNS page. 

![Petstrology Dashboard](https://media.giphy.com/media/GOKqB6aBYHoCZI3XPu/giphy.gif)

If you are unsure of their sign, visit the FIND YOUR SIGNS page. Once there you can input the name of who's sign you are looking up and their date of birth. The date does not need to be the correct year they were born, just make sure the month and day are the correct birthday dates. Once you submit their information a card will pop up below with their name, birth date, and sign. You can then navigate straight to that sign's horoscope. If you decide you don't want to have that one stored anymore, just select remove on the card.

![Find Your Signs](https://media.giphy.com/media/doj70djF7tDVpH45Qo/giphy.gif)

### Reading the Horoscopes
Once selecting your sign of choice, the information given is for today's horoscope. This will include the lucky color, number, and time of day. The compatibility shows what signs you will get along with best today and the description helps you understand your feelings which is directly related to the mood predicted. You can select 'Yesterday' or "Tomorrow" at the bottom of the horoscope to receive the corresponding day's horoscope. The birthday range tells you the range that this sign falls under.

![Horoscope Info](https://media.giphy.com/media/zKu1s8kTYGye40YbJm/giphy.gif)

### Footer Content
Included in the footer are links to an About page and Contact page. These links provide some information on the creation of the app and the developer that made it.

![Move Through Footer Links](https://media.giphy.com/media/9boy6hAH6XZKGdLRKl/giphy.gif)

### Mobile Friendly Responsive Design

In addition to all the functionality above, the application was made completely responsive for mobile, tablet and large screens.

[Back to Top of Page](#table-of-contents)

---

### Challenges
- **One:** Remembering that the API fetch call was a POST and not a GET. Made it tricky when first starting the fetch calls and when implementing testing.
- **Two:** When the site was deployed and opened on a phone broswer, if a user inputs a few names and dates the sizing gets messed up. It creates a white space below the information and makes the pages scrollable. Unsure how to handle this but determined to figure it out!

### Wins
- **One:** Implementing PropTypes to all components that props were passed to.
- **Two:** Implementing React Router throughout the App.

### Future Features
- **One:** Create favoriting a horoscope functionality so that you can save it and read it again later. Create a drop down navigation for routing to all sign, finding a sign, and then a profile style page. This profile will hold the searched signs and also the saved horoscopes that you favorite.
- **Two:** Create functionality so that you can select your sign, so that when you view your's or your pet's horoscope it tells you on the page if you are compatible that day.
- **Three:** Add routes for each sign's date. Use those params as a way to make fetch calls if a user were to reload the page while viewing a horoscope.


[Back to Top of Page](#table-of-contents)
