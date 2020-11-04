const { Console } = require("console");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      console.log('up')
    }; 
    if (key === 's') {
      console.log('down')
    }; 
    if (key === 'd') {
      console.log('right')
    }; 
    if (key === 'a') {
      console.log('left')
    }; 
  })
  return stdin;
};

let exportFunc = {
  setupInput,
};

setupInput();
module.exports = exportFunc;