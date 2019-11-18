const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const axios = require('axios');
const puppeteer = require('puppeteer');
const ProfileGenerator = require('./profileGenerator');


function App() {

    this.writeFileAsync = async function (fileDir, content) {
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

    this.printPDF = async function () {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const options = {
            path: './profile.pdf',
            printBackground: true,
            format: 'A4',
            pageRanges: '1'
        }

        await page.setViewport({
            width: 1440,
            height: 900,
            deviceScaleFactor: 2,
        });

        await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
        await page.pdf(options);
        await browser.close();
    }

    this.generateDeveloperProfile = async function () {

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

            const profile = new ProfileGenerator(userDetails);
            const profileHTML = profile.html;

            const responseHTML = await this.writeFileAsync('index.html', profileHTML);

            return responseHTML

        } catch (error) {
            console.log(error);
        }
    }

    this.init = async function () {

        const htmlResponse = await this.generateDeveloperProfile();

        if (htmlResponse.ok) {

            http.createServer(function (req, res) {
                fs.readFile('index.html', function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });

            }).listen(8080);
        }

        await this.printPDF();
    }
}

const app = new App();
app.init();