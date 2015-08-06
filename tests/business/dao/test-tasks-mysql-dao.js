var test = require('tape');

var taskDao = require('../../../business/dao/tasks-mysql-dao');
var pool = require('../../../server/mysql-client');

test('Try creating a simple task', function(assert) {
	taskDao.createTask({
		name: 'test_fella',
		createdByUserId: 1
	}, function onCreate(err, results) {
		assert.error(err);
		assert.ok(results);
		console.log(results);
		assert.end();
	});	
});

test('Try fetching saved task', function(assert) {
	taskDao.createTask({
		name: 'test_fetchme',
		createdByUserId: 1
	}, function onCreate(err, results) {
		assert.error(err);
		assert.ok(results);
		var insertId = results.insertId;
		taskDao.fetchTaskById(insertId, function(fetchErr, results) {
			assert.ok(results);
			console.log('fetched: ' + JSON.stringify(results));
			assert.error(fetchErr);
			assert.end();
		});
	});	
});

// TODO(jmccarthy14@): This is terrible, find another solve.
setTimeout(function() {
	pool.end(function(err){
		console.log('pool closed');
	});
}, 2000);
