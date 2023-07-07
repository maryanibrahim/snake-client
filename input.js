const { keys } = require('./constants');

let connection;

/**
 * Setup user input handling.
 * @param {Object} conn - The connection object.
 */
const setupInput = function (conn) {
  connection = conn;

  // Set up stdin to handle user input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // Event handler for user input
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      // Exit command: Ctrl+C
      process.exit();
    } else {
      const move = keys[key];
      if (move) {
        // Send the move command to the server
        connection.write(move);
      }
    }
  });
};

module.exports = { setupInput };
