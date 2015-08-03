var test = require('tape');

var tasksDao = require('../../../business/dao/riak/tasks-riak-dao');
var riakClient = require('../../../server/riak-client.js');

test('Can save a simple task object', function (assert) {
	tasksDao.saveTask({
		uuid: 'test_A',
		author: 'jos'
	}, function (err, taskUuid) {
		assert.ok(taskUuid);
		assert.end();
	});
});

test('Can fetch a saved task object', function (assert) {
	tasksDao.saveTask({
		uuid: 'test_A',
		author: 'jos'
	}, function (err, taskUuid) {
		assert.ok(taskUuid);
		tasksDao.fetchTask(taskUuid,
			function(err, result) {
				assert.ok(result);
				console.log(result);
				assert.end();
		});
	});


});

// TODO(jmccarthy14@): This is absolutely terrible.  Remove to improve tests.
setTimeout(function() {
	riakClient.safeShutdown();
}, 2000);

