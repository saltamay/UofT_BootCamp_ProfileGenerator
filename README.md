# profile-generator

Node.js application that dynamically generates a PDF profile from a GitHub username.

## Table of Contents

1. [About](#about)
1. [Getting Started](#getting-started) 
1. [Business Context](#business-context)
1. [Development Strategy](#development-strategy)
1. [Dependencies](#dependencies)
1. [Built With](#built-with)
1. [Minimum Requirements](#minimum-requirements)
<!-- 1. [Directions For Future Deveopment](#directions-for-future-development)
1. [University of Toronto Full-Stack Web Developer Bootcamp Project #1 Details](#)
  1. [Application Requirements](#application-requirements)
  1. [Presentation Requirements](#presentation-requirements) -->

## About

## Getting Started

The application is invoked with the following command:

```sh
node index.js
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

The user will be prompted for a favorite color, which will be used as the background color for cards.

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

## Dependencies

## Built With


## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application generates a PDF resume from the user provided GitHub profile.

* The generated resume includes a bio image from the user's GitHub profile.

* The generated resume includes the user's location and a link to their GitHub profile.

* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

* The background color of the generated PDF matches the color that the user provides.





