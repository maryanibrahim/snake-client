const net = require('net');

// Define the IP and PORT constants for the game server
const IP = '10.0.2.15';
const PORT = 50541;

// Function to establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
