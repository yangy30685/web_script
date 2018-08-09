//printout the filename and dir 

console.log(__filename);
console.log(__dirname);

//define a variable
var url = "http://localhost:80";

//define a function
function log(message) {
	//send request
	console.log(message);
};

//export a funciton 
module.exports=log;
