/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const net = require('net');

// Function to establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // Event handler for incoming data from the server
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  // Event handler for successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RMR');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
