var pool = require('../../server/mysql-client');

function createProject(project, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into projects (org_id,task_list_id,name,description,created_by_user_id) values (?,?,?,?,?)', [project.org_id, project.task_list_id, project.name, project.description,project.created_by_user_id], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getProject(projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from projects where id = ?', [projectId], function(err, results) {
				connection.release();
				cb(err, results.length ? results[0] : results);
			});
		}
	});
}

module.exports = {
	'createProject': createProject,
	'getProject': getProject
};
