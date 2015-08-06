var pool = require('../../server/mysql-client');

function createUser(user, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into users (uuid, first_name, last_name, email) values (?,?,?,?)', [user.uuid, user.firstName, user.lastName, user.email], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getUserByUuid(uuid, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from users where uuid = ?', [uuid], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});
}

function getUserById(id, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from users where id = ?', [id], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});
}

function getUserIdFromUuid(uuid, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select id from users where uuid = ?', [uuid], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});

}

module.exports = {
	'createUser': createUser,
	'getUserById': getUserById,
	'getUserIdFromUuid': getUserIdFromUuid,
	'getUserByUuid': getUserByUuid
};
