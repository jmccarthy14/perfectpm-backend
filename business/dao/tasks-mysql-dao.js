var pool = require('../../server/mysql-client');

function createTask(task, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			var sql = 'insert into tasks (name) values ('+connection.escape(task.name) + ');';
			connection.query('insert into tasks (name) values (?)', [task.name], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function fetchTaskById(taskId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from tasks where id = ?', [taskId], function(err, results) {
				connection.release();
				var result;
				if(results.length) {
					result = results[0];	
				}
				cb(err, result);
			});
		}

	});
}

function fetchTaskByName(taskName, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from tasks where name = ?', [taskName], function(err, results) {
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createTask': createTask,
	'fetchTaskById': fetchTaskById,
	'fetchTaskByName': fetchTaskByName
};
