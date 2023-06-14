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
  });

  // Event handler for incoming data from the server
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
