var userService = require('../service/user-service');

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
	if(user.firstName && user.lastName && user.email) {
		userService.createUser(user, function(err, result) {
			if(err) {
				if(err.code === 'ER_DUP_ENTRY') {
					res.status(400).send('A user with this email already exists');
				} else { 
					res.status(400).send('Error creating user: ' + err.message);
				}
			} else {
				res.send('Created user: ' + JSON.stringify(result));
			}
		});
	} else {
		res.status(400).send('Validation error, be sure to include firstName, lastName and email');
	}
}

module.exports = {
	'createUser': createUser
}
