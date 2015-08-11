var projectsDao = require('../dao/projects-mysql-dao');
var tasksDao = require('../dao/tasks-mysql-dao');
var projectsTasksDao = require('../dao/projects-tasks-mysql-dao');
var orgsProjectsDao = require('../dao/orgs-projects-mysql-dao');

function createProject(project, cb) {
	if(project.org_id && project.name && project.description && project.created_by_user_id) {
		// this should be inside a transaction
		tasksDao.createTaskList(project.org_id, function(err, taskListResults) {
			project.task_list_id = taskListResults.insertId;
			projectsDao.createProject(project, function(err, projectResults) {
				orgsProjectsDao.createOrgProject(project.org_id, projectResults.insertId, cb);
			});
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
	addTaskToProject: addTaskToProject,
	createProject: createProject,
	getProject: getProject,
	getProjectWithTasks: getProjectWithTasks
};
