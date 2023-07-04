// Import necessary constants from constants.js
const { IP, PORT, w, a, s, d, z, x } = require('./constants');
const { connect } = require('./client');

let connection;

// Setup user input handling
const setupInput = function (conn) {
  connection = conn;
  setupUserInput();
};

// Configure stdin to handle user input
const setupUserInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // Event handler for user input
  stdin.on('data', handleUserInput);
};

// Process user input
const handleUserInput = function (key) {
  // Check if the key is the exit command
  if (isExitCommand(key)) {
    process.exit();
  } else {
    // Retrieve the corresponding move from the key
    const move = getMoveFromKey(key);
    if (move) {
      // Send the move to the server
      sendMoveToServer(move);
    }
  }
};

// Check if the key is the exit command
const isExitCommand = function (key) {
  return key === '\u0003';
};

// Retrieve the move from the key
const getMoveFromKey = function (key) {
  const moveMap = {
    w,
    a,
    s,
    d,
    z,
    x
  };

  return moveMap[key];
};

// Send the move to the server
const sendMoveToServer = function (move) {
  connection.write(move);
};

module.exports = { setupInput };
