var projectsDao = require('../dao/projects-mysql-dao');
var projectsTasksDao = require('../dao/projects-tasks-mysql-dao');

function createProject(project, cb) {
	if(project.orgId && project.name && project.description && project.createdByUserId) {
		projectsDao.createProject(project, cb);
	} else {
		cb(new Error('Project must have an orgId,  name, description, and createdByUserId'));
	}
}

function addTaskToProject(projectId, taskId, cb) {
	projectsTasksDao.createProjectTask(projectId, taskId, cb);
}

module.exports = {
	'addTaskToProject': addTaskToProject,
	'createProject': createProject
}
