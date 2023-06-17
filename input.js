/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
const {
  IP, PORT, w, a, s, d, z, x,
} = require('./constants');

let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const { stdin } = process;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};
  // Event handler for keyboard input
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'z') {
    connection.write('Say: Hello!');
  } else if (key === 'x') {
    connection.write('Say: Goodbye!');
  }
};

module.exports = { setupInput };
