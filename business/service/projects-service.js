var projectsDao = require('../dao/projects-mysql-dao');
var tasksDao = require('../dao/tasks-mysql-dao');
var projectsTasksDao = require('../dao/projects-tasks-mysql-dao');

function createProject(project, cb) {
	if(project.orgId && project.name && project.description && project.createdByUserId) {
		// this should be inside a transaction
		tasksDao.createTaskList(project.orgId, function(error, taskListResults) {
			project.taskListId = taskListResults.insertId;
			projectsDao.createProject(project, cb);
		});
	} else {
		cb(new Error('Project must have an orgId,  name, description, and createdByUserId'));
	}
}

function addTaskToProject(projectId, taskId, cb) {
	projectsTasksDao.createProjectTask(projectId, taskId, cb);
}

function getProject(projectId, cb) {
	projectsDao.getProject(projectId, cb);
}

function getProjectWithTasks(projectId, cb) {
	projectsTasksDao.getTasksByProject(projectId, cb);
}

module.exports = {
	'addTaskToProject': addTaskToProject,
	'createProject': createProject,
	'getProject': getProject,
	'getProjectWithTasks': getProjectWithTasks
};
