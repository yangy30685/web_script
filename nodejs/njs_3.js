//import event class
//demo of event which is a base class
const Event_Emitter = require('events');

//extends a self-defined class logger to emitter
class Logger extends Event_Emitter{
	//define a function
	//dont neet key word function inside class
	log(message) {
		console.log(message);
	    //create a event and put object as an argument
	    this.emit('emitted from Dr Yang Studio',{id:"data to deliever", data:'http://address to deliever' });
	}
}
	//export the class
	module.exports = Logger;


