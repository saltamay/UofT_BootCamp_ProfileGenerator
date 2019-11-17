const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');


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
                        message: "Wha is your favorite color? ",
                        name: "color"
                    }
                ]);

        let userDetails = await axios.get(`https://api.github.com/users/${userInput.login}`);

        userDetails = {
            ...userInput,
            ...userDetails.data
        };

        console.log(userDetails);

    } catch (error) {

    }

}

generateDeveloperProfile();