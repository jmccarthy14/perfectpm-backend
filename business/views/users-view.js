var userService = require('../service/user-service');

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
	userService.createUser(user, function(err, result) {
		if(err) {
			res.status(400).send('Error creating user: ' + err.message);
		} else {
			res.send('Created user: ' + JSON.stringify(result));
		}
	});
}

module.exports = {
	'createUser': createUser
}
