/* eslint-disable func-names */
/* eslint-disable no-console */
const { connect } = require('./client');

console.log('Connecting...');
const conn = connect();

// Keyboard input handling
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit the game if the user presses Ctrl + C
  } else if (key === 'n') {
    const name = 'RMR';
    conn.write(`Name: ${name}`); // Send the name message to the server
  }
};

const setupInput = function () {
  const { stdin } = process;
  stdin.setRawMode(true); // Enable raw mode to handle keyboard inputs
  stdin.setEncoding('utf8'); // Interpret keyboard inputs as UTF-8 strings
  stdin.resume(); // Resume stdin to begin receiving input

  stdin.on('data', handleUserInput);

  return stdin;
};

setupInput(); // Start listening for keyboard input
