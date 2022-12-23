#!/usr/bin/env node

import yargs from "yargs";

const options = yargs.usage("Usage: -q <query>").option("q", {
  alias: "query",
  describe: 'Your question in double quotes like "What is the meaning of life?"',
  type: "string",
  demandOption: true,
}).argv;

const greeting = `Hello, ${options.query}`;

console.log(greeting);

// https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
