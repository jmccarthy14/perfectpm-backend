var pool = require('../../server/mysql-client');

function createOrgUser(orgId, userId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into orgs_users (org_id, user_id) values (?,?)', [orgId, userId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getUsersByOrg(id, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs_users ou inner join users u on ou.user_id = u.id where ou.org_id = ?', [orgId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createOrgUser': createOrgUser,
	'getUsersByOrg': getUsersByOrg
}
