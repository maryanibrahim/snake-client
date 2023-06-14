/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { connect } = require('./client'); // Import the connect function from client.js

console.log('Connecting...');
const conn = connect(); // Connect to the game server

// Keyboard input handling
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit the game if the user presses Ctrl + C
  }
};

const setupInput = function () {
  const { stdin } = process;
  stdin.setRawMode(true); // Enable raw mode to handle keyboard inputs
  stdin.setEncoding('utf8'); // Interpret keyboard inputs as UTF-8 strings
  stdin.resume(); // Resume stdin to begin receiving input

  // Event handler for keyboard input
  stdin.on('data', handleUserInput);

  return stdin;
};

setupInput(); // Start listening for keyboard input
