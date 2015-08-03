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
			connection.query('select user_id from orgs_users where org_id = ?', [orgId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	"createOrgUser": createOrgUser,
	"getUsersByOrg": getUsersByOrg
}
