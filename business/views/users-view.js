var userService = require('../service/user-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function getUser(req, res) {
    userService.getUser(req.params.userId, ppmResponseWrapper(res));
}

function getUserTasks(req, res) {
    userService.getUserTasks(req.params.userId, ppmResponseWrapper(res));
}

function addTaskToUser(req, res) {
    userService.addTaskToUser(req.params.userId, req.params.taskId, req.body.priority, ppmResponseWrapper(res));
}

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
    var orgId = req.body.org_id;
	userService.createUser(user, orgId, ppmResponseWrapper(res));
}

module.exports = {
    'getUser': getUser,
    'getUserTasks': getUserTasks,
    'addTaskToUser': addTaskToUser,
	'createUser': createUser
};
