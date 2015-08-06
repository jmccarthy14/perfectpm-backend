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

function getProject(projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from projects where id = ?', [projectId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

// TODO(joseph@): Fix
function getProjectWithTasks(projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from projects p inner join projects_tasks pt on p.id = pt.project_id inner join tasks t on pt.task_id = t.id where p.id = ?', [projectId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createProject': createProject,
	'getProject': getProject,
	'getProjectWithTasks': getProjectWithTasks
};
