var routedApp = require('./routed-app');
var riakClient = require('./riak-client');
var config = require('../config/base.json');

var server = routedApp.listen(config.host.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Backend listening at http://%s:%s', host, port);
});


var gracefulShutdown = function () {
	console.log("Received kill signal, shutting down gracefully.");
	server.close(function () {
		console.log("Closed out remaining connections.");
		riakClient.safeShutdown();
		process.exit()
	});
		  
		   
	setTimeout(function () {
		console.error("Could not close connections in time, forcefully shutting down");
		riakClient.safeShutdown();
		process.exit()
	}, 10*1000);
}


process.on ('SIGTERM', gracefulShutdown);


process.on ('SIGINT', gracefulShutdown);  

