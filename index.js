#!/usr/bin/env node

import yargs from "yargs";
// import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const options = yargs
  .usage("Usage: -q <query>")
  .option("q", {
    alias: "query",
    describe: 'Your question in double quotes like "What is the meaning of life?"',
    type: "string",
    demandOption: true,
  })
  .option("m", {
    alias: "max_tokens",
    describe: 'Max number of characters in result you want to return. Default is 300."',
    type: "number",
    demandOption: false,
  }).argv;

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: options.query,
  temperature: 0,
  max_tokens: options.max_tokens || 300,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
});
console.log("response", response.data.choices[0].text);

// const greeting = `Hello, ${options.query}`;

// console.log(greeting);

// https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
