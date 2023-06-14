/* eslint-disable func-names */
/* eslint-disable no-console */
const net = require('net');

// Function to establish a connection with the game server
const connect = function () {
  // Create a TCP connection to the game server
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // Event handler for successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RMR');
    /* conn.write('Move: up');
    setTimeout(() => {
      conn.write('Move: down');
    }, 500); // Delay sending the "Move: down" command by 500 milliseconds
    setTimeout(() => {
      conn.write('Move: left');
    }, 1000); // Delay sending the "Move: left" command by 1000 milliseconds
    setTimeout(() => {
      conn.write('Move: right');
    }, 1500); // Delay sending the "Move: right" command by 1500 milliseconds */
  });

  // Event handler for incoming data from the server
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
