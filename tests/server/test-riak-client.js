var test = require('tape');
var riakClient = require('../../server/riak-client');

test('We connect to a healthy riak cluster', function (assert) {
	var assert = assert;
	riakClient.ping(function (err, rait) {
		assert.error(err, 'Error connecting to client');
		assert.notOk(err, 'No error object');
		riakClient.safeShutdown();
		assert.end(err);
	});
});

