var userService = require('../service/user-service');
var ppmResponseWrapper = require('../../server/ppm-response');


function getUser(req, res) {
    userService.getUser(req.params.userId, ppmResponseWrapper(res));
}

function loginUser(req, res) {
    userService.loginUser(req.params.email, ppmResponseWrapper(res));
}

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
    var orgId = req.body.org_id;
	userService.createUser(user, orgId, ppmResponseWrapper(res));
}

module.exports = {
    'getUser': getUser,
    'loginUser': loginUser,
	'createUser': createUser
};
