/* eslint-disable no-undef */
/* eslint-disable func-names */
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
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
};

module.exports = { setupInput };
