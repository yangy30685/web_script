//import path module
const path = require('path');

	console.log(__filename,__dirname)
	console.log(typeof(__filename),typeof(__dirname));

//string to obj
var obj_path = path.parse(__filename);

	console.log(obj_path);

/************************ Seperate Line **************************/
//omported os module
const os = require('os');

//byte to mb
const   unit = 0.000001;
var obj_os_1 = Math.floor(os.totalmem()*unit);
var obj_os_2 = Math.floor(os.freemem()*unit);

	console.log('total mem:' + obj_os_1,'Mb');
	
	//use template string
	console.log(`free mem: ${obj_os_2}` + 'Mb');

/************************ Seperate Line **************************/
//imported fs module	
//use sync method
const    fs = require('fs');
const files = fs.readdirSync('./');

	console.log(files);

//use asynchronous
fs.readdir('./',function(err,files) {
		if(err) {
			console.log('error',err);
		} else { 
			console.log('files',files);
		}
})