var pool = require('../../server/mysql-client');

function createProject(project, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into projects (org_id,task_list_id,name,description,created_by_user_id) values (?,?,?,?,?)', [project.orgId, project.taskListId, project.name, project.description,project.createdByUserId], function(err, results) {
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

// TODO(joseph@): Fix
function getProjectWithTasks(projectId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
            getProject(projectId, function(err, results) {    
                connection.query('select * from projects_tasks pt inner join tasks t on pt.task_id = t.id where pt.project_id = ?', [projectId], function(err, results2) {
                    connection.release();
                    results.tasks = results2;
                    cb(err, ['wtf']);
                });
            });
		}
	});
}

module.exports = {
	'createProject': createProject,
	'getProject': getProject,
	'getProjectWithTasks': getProjectWithTasks
};
