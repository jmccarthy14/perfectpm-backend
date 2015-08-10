var tasksDao = require('../dao/tasks-mysql-dao');

function createTask(task, cb) {
	if(task.name && task.description && task.estimate && task.createdByUserId) {
		tasksDao.createTask(task, cb);
	} else {
		cb(new Error('Must have a name, description, estimate, and createdByUserId'));
	}
}

function updateTask(taskId, task, cb) {
	if(task.name && task.description && task.estimate) {
		tasksDao.updateTask(taskId, task, cb);
	} else {
		cb(new Error('Must have a name, description, estimate, and createdByUserId'));
	}
}

function getTaskList(taskListId, cb) {
	tasksDao.getTaskList(taskListId, cb);
}

function addTaskToList(taskListId, taskId, priority, cb) {
	tasksDao.addTaskToList(taskListId, taskId, priority, cb);
}

function updateTaskInList(taskListId, taskId, priority, cb) {
	tasksDao.updateTaskInList(taskListId, taskId, priority, cb);
}

module.exports = {
	'createTask': createTask,
	'updateTask': updateTask,
	'getTaskList': getTaskList,
	'addTaskToList': addTaskToList,
	'updateTaskInList': updateTaskInList
};
