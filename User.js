const inquirer = require('inquirer');
const axios = require('axios');


module.exports = function User() {

    this.userDetails = {};

    this.getUserDetails = async function () {
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

        this.userDetails = {
            ...userInput,
            ...userDetails.data
        };

        return this.userDetails;
    }
}

