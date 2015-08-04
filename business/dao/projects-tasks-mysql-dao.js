var pool = require('../../server/mysql-client');

function createProjectTask(projectId, taskId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into projects_tasks (project_id, task_id) values (?,?)', [projectId, taskId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function getTasksByProject(projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from projects_tasks pt inner join tasks t on pt.task_id = t.id where pt.project_id = ?', [projectId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createProjectTask': createProjectTask,
	'getTasksByProject': getTasksByProject
};
