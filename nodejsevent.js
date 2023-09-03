const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn of the motor...');

  setTimeout(() =>{
    console.log("Reminder Pelase turn off the motor...");
  }, 3000)


});

console.log("The script is running ....");
console.log("The script is still running ....");

myEmitter.emit('WaterFull');