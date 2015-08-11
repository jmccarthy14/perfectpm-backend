var pool = require('../../server/mysql-client');

function createTask(task, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into tasks (name,description,estimate,created_by_user_id) values (?,?,?,?)', [task.name, task.description,task.estimate,task.createdByUserId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function updateTask(taskId, task, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('UPDATE tasks SET name = ?, description = ?, estimate = ? WHERE id = ?', [task.name, task.description, task.estimate, taskId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function createTaskList(orgId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into task_list (org_id) values (?)', [orgId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function fetchTaskById(taskId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from tasks where id = ?', [taskId], function(err, results) {
				connection.release();
				var result;
				if(results.length) {
					result = results[0];	
				}
				cb(err, result);
			});
		}

	});
}

function getTaskList(taskListId, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('select * from task_list where id = ?', [taskListId], function(err, taskListResults) {
				if (taskListResults.length) {
					var taskList = taskListResults[0];
					connection.query('select t.*, tlt.priority from task_list_tasks tlt JOIN tasks t ON tlt.task_id = t.id where task_list_id = ?', [taskListId], function(err, tasksResults) {
						connection.release();
						taskList.tasks = tasksResults;
						cb(err, taskList);
					});
				} else {
					cb('No task list found for id ' + taskListId);
				}
				
			});
			
		}
	});
}

function addTaskToList(taskListId, taskId, priority, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('insert into task_list_tasks (task_list_id, task_id, priority) values (?,?,?)', [taskListId, taskId, priority], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function shiftTaskListPriorities(taskListId, atPriority, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if (err) {
			cb(err);
		} else {
			connection.query('update task_list_tasks set priority = priority + 1 where task_list_id = ? and priority >= ?', [taskListId, atPriority], function (err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

function updateTaskInList(taskListId, taskId, priority, cb) {
	pool.getConnection(function onConnection(err, connection) {
		if(err) {
			cb(err);
		} else {
			connection.query('update task_list_tasks set priority = ? where task_list_id = ? and task_id = ?', [priority, taskListId, taskId], function(err, results) {
				connection.release();
				cb(err, results);
			});
		}
	});
}

module.exports = {
	'createTask': createTask,
	'updateTask': updateTask,
	'createTaskList': createTaskList,
	'fetchTaskById': fetchTaskById,
	'getTaskList': getTaskList,
	'addTaskToList': addTaskToList,
	'shiftTaskListPriorities': shiftTaskListPriorities,
	'updateTaskInList': updateTaskInList
};
