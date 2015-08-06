var userService = require('../service/user-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
	userService.createUser(user, ppmResponseWrapper(res));
}

module.exports = {
	'createUser': createUser
};
