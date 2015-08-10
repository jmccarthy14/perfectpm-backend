var nodeUuid = require('node-uuid');
var orgsUsersDao = require('../dao/orgs-users-mysql-dao');
var tasksDao = require('../dao/tasks-mysql-dao');
var userDao = require('../dao/users-mysql-dao');
var usersTasksDao = require('../dao/users-tasks-mysql-dao');

function getUser(userId, cb) {
    userDao.getUserById(userId, cb);
}

function getUserTasks(userId, cb) {
    userDao.getUserTasks(userId, cb);
}

function addTaskToUser(userId, taskId, priority, cb) {
    usersTasksDao.createUserTask(userId, taskId, priority, cb);
}

function createUser(user, orgId, cb) {
	if(user.firstName && user.lastName && user.email) {
		user.uuid = user.uuid ? user.uuid : nodeUuid.v4();
		// this should be a transaction
		userDao.createUser(user, function(error, userResults) { 
			if (error) {
				cb(error, null);
			} else {
				user.id = userResults.insertId;
				tasksDao.createTaskList(orgId, function(error, taskListResults) {
					if (error) {
						cb(error, null);
					} else {
						orgsUsersDao.createOrgUser(orgId, user.id, taskListResults.insertId, function(orgUserResults) {
							if (error) {
								cb(error, null);
							} else {
								cb(null, user);
							}
						});
					}
				});
			}
		});
		
	} else {
		cb(new Error('Please include all required data in the user object'));
	}
}	

module.exports = {
    'getUser': getUser,
    'getUserTasks': getUserTasks,
    'addTaskToUser': addTaskToUser,
	'createUser': createUser
};
