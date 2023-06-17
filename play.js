/* eslint-disable import/extensions */
/* eslint-disable no-console */
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');
const conn = connect(); // Connect to the game server

setupInput(conn); // Pass the connection object to setupInput function
