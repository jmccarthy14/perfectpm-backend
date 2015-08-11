var pool = require('../../server/mysql-client');

function createOrgUser(orgId, userId, taskListId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into orgs_users (org_id, user_id, task_list_id) values (?,?,?)', [orgId, userId, taskListId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getOrgUser(orgId, userId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs_users ou inner join users u on ou.user_id = u.id where ou.org_id = ? and ou.user_id = ?', [orgId, userId], function(err, results) {
				connection.release();
				if (results.length) {
					cb(err, results[0]);
				} else {
					cb('Org user not found');
				}
			});
		}
	});
}

function getUsersByOrg(orgId, cb) {
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

function getOrgsByUser(userId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs_users ou inner join users u on ou.user_id = u.id where ou.user_id = ?', [userId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}


module.exports = {
	'createOrgUser': createOrgUser,
	'getOrgUser': getOrgUser,
	'getUsersByOrg': getUsersByOrg,
	'getOrgsByUser': getOrgsByUser,
};
