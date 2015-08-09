var userService = require('../service/user-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function getUser(req, res) {
    userService.getUser(req.params.userId, ppmResponseWrapper(res));
}

function getUserTasks(req, res) {
    userService.getUserTasks(req.params.userId, ppmResponseWrapper(res));
}

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
	userService.createUser(user, ppmResponseWrapper(res));
}

module.exports = {
    'getUser': getUser,
    'getUserTasks': getUserTasks,
	'createUser': createUser
};
