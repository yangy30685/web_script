//receive log function from njs_2.js

const const_var_aaa = require('./njs_2.js');
//use funciton imported from external file njs_2.js
const_var_aaa ( 'this is a test message for const const_var_aaa ' );;

//define a new funciton
function DrYang (name) {
	console.log("Hi!"+" "+name);
}

//recaconst_var_aaa   the function
DrYang("bro!");
