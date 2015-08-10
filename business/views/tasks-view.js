var tasksService = require('../service/tasks-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createTask(req, res) {
	tasksService.createTask(req.body, ppmResponseWrapper(res));
}

function updateTask(req, res) {
	tasksService.updateTask(req.params.taskId, req.body, ppmResponseWrapper(res));
}

function getTaskList(req, res) {
	tasksService.getTaskList(req.params.taskListId, ppmResponseWrapper(res));
}

function addTaskToList(req, res) {
	tasksService.addTaskToList(req.params.taskListId, req.params.taskId, req.body.priority, ppmResponseWrapper(res));
}

function updateTaskInList(req, res) {
	tasksService.updateTaskInList(req.params.taskListId, req.params.taskId, req.body.priority, ppmResponseWrapper(res));
}

module.exports = {
	'createTask': createTask,
	'updateTask': updateTask,
	'getTaskList': getTaskList,
	'addTaskToList': addTaskToList,
	'updateTaskInList': updateTaskInList
};
