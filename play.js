// const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
  
//   const conn = net.createConnection({ 
//     host: '135.23.222.131',
//     port: 50542
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 
//   conn.on('connecting', () => console.log("welcome to the game"));
//   return conn;
// }

const { connect } = require('./client');
console.log('Connecting ...');
connect();
