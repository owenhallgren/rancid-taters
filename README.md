## Rancid Taters
---

A [Front-End Project](https://github.com/owenhallgren/rancid-taters) by [Owen Hallgren](https://github.com/owenhallgren) and [Max Bregman](https://github.com/Max9545)



1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
5. [Challenges](#challenges)
6. [Wins](#wins)
7. [Future Additions](#future-additions)

## Deplyed Site
* [Deployed Site](https://rancid-taters.vercel.app)

## Installation 
* Clone this repo down, `cd` into it and run `npm i react`.
* In the project directory run `npm install --save @fortawesome/fontawesome-free`
* To view the site run npm start




## Overview

This is a Turing School of Software and Design Module 3 project. In this project movies are displayed on the home page. A user can search for a movie from the top of the page. A user can click on a movie to learn more about it. On the details page the user is shown the genre, the rating, the runtime, the overview, and shown a trailer. All information is being pulled from an external API. 


## Learning Goals

* Gain a better understanding of an app built using React
* Understand how to use React Router
* Utilize API calls in a clean way
* Learn how to use state effectively in a react app
* Implement a controlled form
* Craft code with clean style, using small functions that show trends toward DRYness and SRP
* Implement Cypress with sad and happy path tests


## Technologies

* JSX
* CSS
* Javascript
* Git
* GitHub
* React
* React Router
* Cypress
* React Youtube Player

---
## Features

+ [Display Movies on Home Page](#display-movies-on-home-page)
+ [Search Movies](#search-movies)
+ [Display Movie Details](#display-movie-details)



## Display Movies on Home Page

On page load, the user will see a grid of movies


![](https://imgur.com/zQjvXNt)


## Search Movies


On the home page, the user can search for movies by title, the movies shown will be updated with each key click


![](https://media.giphy.com/media/38exZ6t7rN7AzulOHp/giphy.gif)


## Display Movie Details
When the user clicks on a specific movie they will be taken to a details page. On this page, they will see the runtime, rating, genres, overview, and trailer

![](https://media.giphy.com/media/FZrZOWlgzQ7xrZSqMR/giphy.gif)


---


## Challenges

* Getting Router to work 
* Using stubbing in cypress tests
* Using an Icon
* Getting things to look right


---
## Wins

* Using React to build an app from the ground up
* Implementing a controlled form
* Implementing Cypress tests
* Using React Router

---
## Future Additions

* Add debouncing to search form to reduce api calls
* Giving the user the ability to add movies to favorites
* Letting the user search by genres and rating
