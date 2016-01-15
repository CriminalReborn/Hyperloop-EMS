const net = require('net');

var address

var server = net.createServer(function (sock) {
	sock.on('connect', function(data) {
		//connection from client
		console.log('Connection: ' + sock.remoteAddress);
	});
    sock.on('data', function(data) {
		//receive from client
		
        console.log('Data: ' + sock.remoteAddress + " " + data);
    });
    sock.on('end', function(data) {
		//client disconnect
		console.log('Disconnection: ' + sock.remoteAddress);
	});
    sock.on('close', function(data) {
		//client shutdown server
        console.log('Close: ' + sock.remoteAddress);
    });
    
})

server.listen(() => {
  address = server.address();
  console.log('opened server on port %j', address.port);
});

server.write("Test")