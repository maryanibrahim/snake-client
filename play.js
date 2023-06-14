/* eslint-disable func-names */
/* eslint-disable no-console */
const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  return conn;
};

console.log('Connecting...');
connect();
