var pool = require('../../server/mysql-client');

function createOrg(uuid, name, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into orgs (uuid, name) values (?,?)', [uuid, name], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getOrgByUuid(uuid, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs where uuid = ?', [uuid], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});
}

function getOrgById(id, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs where id = ?', [id], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});
}

function getOrgIdFromUuid(uuid, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select id from orgs where uuid = ?', [uuid], function(err, results) {
				connection.release();
				var result = results.length ? results[0] : undefined;
				cb(err, result);
			});
		}
	});

}

module.exports = {
	'createOrg': createOrg,
	'getOrgById': getOrgById
};
