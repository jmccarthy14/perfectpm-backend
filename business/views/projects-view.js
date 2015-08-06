var projectsService = require('../service/projects-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createProject(req, res) {
	projectsService.createProject(req.body, ppmResponseWrapper(res));
}

function addTaskToProject(req, res) {
	var projectId = req.params.projectId;
	var taskId = req.params.taskId;

	projectsService.addTaskToProject(projectId, taskId, ppmResponseWrapper(res));
}

function getProject(req, res) {
	var projectId = req.params.projectId;

	projectsService.getProject(projectId, ppmResponseWrapper(res));
}

function getProjectWithTasks(req, res) {
	var projectId = req.params.projectId;

	projectsService.getProjectWithTasks(projectId, ppmResponseWrapper(res));
}

module.exports = {
	'addTaskToProject': addTaskToProject,
	'createProject': createProject,
	'getProject': getProject,
	'getProjectWithTasks': getProjectWithTasks
};
