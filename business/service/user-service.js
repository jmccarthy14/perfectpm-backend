var nodeUuid = require('node-uuid');
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

function createUser(user, cb) {
	if(user.firstName && user.lastName && user.email) {
		user.uuid = user.uuid ? user.uuid : nodeUuid.v4();
		userDao.createUser(user, function onCreate(err, result) {
			cb(err, result);		
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
