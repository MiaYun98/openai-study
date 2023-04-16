// index.js

import { OpenAI } from "./src/openai/OpenAI.js";
const dotenv = require ('dotenv');
dotenv.config();
// Creating a new instance of the OpenAI class and passing in the OPENAI_KEY environment variable
const openAI = new OpenAI(process.env.OPENAI_KEY);

const model = 'text-davinci-003';
const list = ["spaceniddle"]
// Function to generate the prompt for the OpenAI API 
// In the future, it will be moved to a helper class in the next code review
const generatePrompt = () => {
    return `write a riddle about one places in washington which is not in this list: ${list}, for scavander hunters`
};
// Use the generateText method to generate text from the OpenAI API and passing the generated prompt, the model and max token value
openAI.generateText(generatePrompt(), model, 800)
    .then(text => {
        // Logging the generated text to the console
        // In the future, this will be replaced to upload the returned blog text to a WordPress site using the WordPress REST API
        console.log(text);
    })
    .catch(error => {
        console.error(error);
    });