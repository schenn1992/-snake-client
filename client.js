const net = require('net');

const connect = function() {
  
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => console.log("Successfully connected to game server"));
  conn.on('connect', () => conn.write("Name: YHC"));
  return conn;

}

let a = {
  connect
}

module.exports = a;


