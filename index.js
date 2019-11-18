const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const axios = require('axios');
const puppeteer = require('puppeteer');

const writeFileAsync = (fileDir, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileDir, content, err => {
            if (err) {
                reject(err);
            }

            const response = {
                ok: true
            };
            resolve(response);
        })
    })
}

const printPDF = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const options = {
        path: './profile.pdf',
        printBackground: true,
        landscape: true
    }

    await page.setViewport({
        width: 960,
        height: 720,
        deviceScaleFactor: 1,
    });

    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

    await page.pdf(options);

    await browser.close();
}

function Profile(userInfo) {

    this.name = userInfo.name;
    this.gitHubURL = userInfo.html_url;
    this.color = userInfo.color;
    this.img = userInfo.avatar_url;
    this.bio = userInfo.bio;
    this.blog = userInfo.blog;
    this.location = userInfo.location;
    this.company = userInfo.company;
    this.public_repos = userInfo.public_repos;
    this.followers = userInfo.followers;
    this.following = userInfo.following;


    this.style = {
        left: `background-color: lightgrey; height: 100%; margin: 0 !important; padding: 0 !important;`,
        right: `height: 100%; padding: 0 !important;`,
        devImg: `height: 50%;`,
        devCards: `background-color: white; height: 50%;`,
        list: `display: inline-block;`
    }

    this.html = `
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
        <!-- Materialize Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
        <link rel="stylesheet" href="./style.css">
    
        <title>Developer Profile</title>

        <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            margin: 0 !important;
            padding: 0 !important;
        }
        </style>
    </head>
    
    <body>
        <div class="row">
            <section class="section left col s12 m8 l8 valign-wrapper" style="${this.style.left}">
                <div class="row">
                <div class="col s12 m4 offset-m1 dev-info">
                    <h5>Hi!</h5>
                    <h6>My name is ${this.name}!</h6>
                    <p>Currently @ ${this.company}</p>
                    <div id="dev-bio">
                        ${this.bio}
                    </div>
                    <ul class="social-links">
                        <li style="${this.style.list}"><a href="#"><i class="material-icons">location_on</i>${this.location}</a></li>
                        <li style="${this.style.list}"><a href="${this.gitHubURL}"><i class="material-icons">code</i>GitHub</a></li>
                        <li style="${this.style.list}"><a href="${this.blog}"><i class="material-icons">rss_feed</i>Blog</a></li>
                    </ul>
                </div>
                <div class="col s12 m7 dev-cards valign-wrapper" style="${this.style.devCards}">
                    <div class="row">
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Public Repositories</span>
                                <p clas="text-white">${this.public_repos}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Followers</span>
                                <p class="text-white">${this.followers}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">GitHub Stars</span>
                                <p class="text-white">${this.stars}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Following</span>
                                <p class="text-white">${this.following}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section class="section right col s12 m4 l4 valign-wrapper ${this.color}" style="${this.style.right}>
                <div id="dev-img" style="${this.style.devImg}">
                    <img src="${this.img}" alt="Developer Profile Picture">
                </div>
            </section>
        </div>
    
    </body>
    
    </html>
    `
}



const generateDeveloperProfile = async () => {

    try {

        // Get user's github profile handle and their favorite color
        const userInput =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter your GitHub handle: ",
                        name: "login"
                    },
                    {
                        type: "input",
                        message: "What is your favorite color? ",
                        name: "color"
                    }
                ]);

        let userDetails = await axios.get(`https://api.github.com/users/${userInput.login}`);

        userDetails = {
            ...userInput,
            ...userDetails.data
        };

        // console.log(userDetails);

        const profile = new Profile(userDetails);
        const profileHTML = profile.html;

        const responseHTML = await writeFileAsync('index.html', profileHTML);

        if (responseHTML.ok) {

            http.createServer(function (req, res) {
                fs.readFile('index.html', function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });

            }).listen(8080);
        }

        printPDF();

    } catch (error) {
        console.log(error);
    }

}

generateDeveloperProfile();