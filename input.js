const { Console } = require("console");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    
    switch(key) {
      case '\u0003':
      process.exit();

      case 'w':
      connection.write("Move: up");

      case 's':
      connection.write("Move: down");

      case 'd':
      connection.write("Move: right");

      case 'a':
      connection.write("Move: left");

      case 'r':
      connection.write("Say: SO?");
    }
  })
  return stdin;
};

let exportFunc = {
  setupInput,
};

//setupInput();
module.exports = exportFunc;