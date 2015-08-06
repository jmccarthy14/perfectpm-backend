var projectsService = require('../service/projects-service');

function createProject(req, res) {
	projectsService.createProject(req.body, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + err.message);
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
};

function addTaskToProject(req, res) {
	var projectId = req.params.projectId;
	var taskId = req.params.taskId;

	projectsService.addTaskToProject(projectId, taskId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function getProject(req, res) {
	var projectId = req.params.projectId;

	projectsService.getProject(projectId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function getProjectWithTasks(req, res) {
	var projectId = req.params.projectId;

	projectsService.getProjectWithTasks(projectId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

module.exports = {
	'addTaskToProject': addTaskToProject,
	'createProject': createProject,
	'getProject': getProject,
	'getProjectWithTasks': getProjectWithTasks
};
