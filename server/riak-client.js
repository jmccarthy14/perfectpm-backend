var Riak = require('basho-riak-client');
var config = require('../config/base.json');

var client = new Riak.Client(config.riak.cluster);

// TODO(jmccarthy14@) This is bad, fix this.
client.safeShutdown = function client_shutdown() {
	client.shutdown(function (state) {
		if (state === Riak.Cluster.State.SHUTDOWN) {
			process.exit();
		}
	});
};

module.exports = client;
