#!/usr/bin/env node

/**
 * This is a CLI (Command Line Interface) application built using Commander.js
 * Commander.js is a popular library for creating command-line interfaces in Node.js
 */
import { Command } from "commander";

// Import the handleEcho function from our commands module
import { handleEcho } from "./commands";

// Create a new Command instance to define our CLI program
const cliCommand = new Command();

// Set the name of our CLI program
cliCommand.name("ts-cli-demo");

// Define a command named 'echo' that takes a required <text> parameter
// When this command is run, it will call our handleEcho function
cliCommand.command("echo <text>").action(handleEcho);

// Parse the command line arguments and execute the matching command
cliCommand.parse(process.argv);
