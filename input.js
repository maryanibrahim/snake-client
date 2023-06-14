let connection; // Variable to hold the connection object

const setupInput = (conn) => {
  connection = conn; // Assign the connection object to the variable
  const { stdin } = process;
  stdin.setRawMode(true); // Enable raw mode to handle keyboard inputs
  stdin.setEncoding('utf8'); // Interpret keyboard inputs as UTF-8 strings
  stdin.resume(); // Resume stdin to begin receiving input

  // Event handler for keyboard input
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit(); // Exit the game if the user presses Ctrl + C
    } else if (key === 'w') {
      connection.write('Move: up'); // Send "Move: up" command to the server
    } else if (key === 'a') {
      connection.write('Move: left'); // Send "Move: left" command to the server
    } else if (key === 's') {
      connection.write('Move: down'); // Send "Move: down" command to the server
    } else if (key === 'd') {
      connection.write('Move: right'); // Send "Move: right" command to the server
    }
  };

  stdin.on('data', handleUserInput);
};

// Export the setupInput function
module.exports = { setupInput };
