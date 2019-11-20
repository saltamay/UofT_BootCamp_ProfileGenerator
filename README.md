# UofT Full-Stack Web Development Bootcamp Project #7: Developer Profile Generator

Node.js application that dynamically generates a PDF profile from a GitHub username.

## Table of Contents

1. [About](#about)
1. [Getting Started](#getting-started) 
1. [Business Context](#business-context)
1. [Development Strategy](#development-strategy)
1. [Built With](#built-with)
1. [Demo](#demo)
1. [Minimum Requirements](#minimum-requirements)
1. [Submission](#submission)

## About

Developer profile generator accepts 2 inputs from the user. GitHub handle and favorite color and dynamically genrates developer's profile landing page including developer's the following:

    - Picture
    - Name
    - Current Position
    - Links to Google Maps location, GitHub and personal blog

It also populates developer's GitHub details like the number of public repos, followers, following and total stars by using [GitHub API](https://developer.github.com/v3/).

## Getting Started

The application is invoked with the following command:

```sh
npm start
```

## Business Context

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

Following the common templates for user stories, this challenge can be framed as follows for various stakeholders:

Product manager:

```
AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders


GIVEN the developer has a GitHub profile

WHEN prompted for the developer's GitHub username and favorite color

THEN a PDF profile is generated
```

Refer to the [design mockup](./assets/09-NodeJS-homework-demo.pdf).

## Development Strategy

The users will be prompted for their GitHub handle and their favorite color, which will be used as the background color for cards.

The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Built With
* [Materialize CSS](https://materializecss.com/) -- Frontend CSS Framework
* [Node.js](https://nodejs.org/en/docs/) -- JavaScript runtime
* [Inquirer](https://www.npmjs.com/package/inquirer) -- Interactive CLI
* [Axios](https://www.npmjs.com/package/axios) -- Promise based HTTP client for the browser and node.js
* [Puppeteer](https://www.npmjs.com/package/puppeteer) -- Generate screenshots and PDFs of pages.
* [GitHub API](https://developer.github.com/v3/)

## Demo

[demo](./assets/profile-generator-demo.gif)

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application generates a PDF resume from the user provided GitHub profile.

* The generated resume includes a bio image from the user's GitHub profile.

* The generated resume includes the user's location and a link to their GitHub profile.

* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

* The background color of the generated PDF matches the color that the user provides.

## Submission

You are required to submit the following:

* An animated GIF demonstrating the app functionality

* A generated PDF of your GitHub profile

* The URL of the GitHub repository





