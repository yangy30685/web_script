
//demo of http
const   http = require('http');

const server = http.createServer((req,res) => {
	if(req.url === '/') {
		res.write('Welcome to DrYang Studio');
		res.end();
	}

	if(req.url === '/test') {
		res.write('this is folder test\n')
		res.write(JSON.stringify([1,'A',3,4]));
		res.end();
	}
});

server.listen(3000);
console.log('listen on prot 3000...');