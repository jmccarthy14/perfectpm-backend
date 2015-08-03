var tasksDao = require('../dao/tasks-mysql-dao');

function createTask(task, cb) {
	if(task.name && task.description && task.estimate && task.createdByUserId) {
		tasksDao.createTask(task, cb);
	} else {
		cb(new Error('Must have a name, description, estimate, and createdByUserId'));
	}
}

module.exports = {
	'createTask': createTask
}
