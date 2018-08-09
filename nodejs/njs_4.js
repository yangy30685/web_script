//work with file njs_4.js

//define a class
const Class_mm = require('./njs_3.js');
//create a new object
const   obj_mm = new Class_mm();

//register a listener for receive slgnal from emitter
// use => instead of funciton(args) {}
obj_mm.on('emitted from Dr Yang Studio', args => {
	//use an arrow function
	console.log('listener is called', args);
});

//send out the request (the scope is within this file)
obj_mm.log('a new event is created');