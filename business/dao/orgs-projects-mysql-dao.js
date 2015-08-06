var pool = require('../../server/mysql-client');

function createOrgProject(orgId, projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into orgs_projects (org_id, project_id) values (?,?)', [orgId, projectId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getProjectsByOrg(orgId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from orgs_projects op inner join projects p on op.project_id = p.id where op.org_id = ?', [orgId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createOrgProject': createOrgProject,
	'getProjectsByOrg': getProjectsByOrg
};

