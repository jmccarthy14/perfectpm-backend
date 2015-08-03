var pool = require('../../server/mysql-client');

function createProject(project, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into projects (org_id,name,description,created_by_user_id) values (?,?,?,?)', [project.orgId, project.name, project.description,project.createdByUserId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createProject': createProject
}
