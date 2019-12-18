require('http').createServer(function (request, response) {
  response.end('node listening on: \n'+process.argv[2]);
}).listen(process.argv[2]);
