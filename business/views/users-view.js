var userService = require('../service/user-service');

function createUser(req, res) {
	// Minimal validation here, on api layer.
	var user = req.body;
	if(user.first_name && user.last_name && user.email) {
		userService.createUser(user.first_name, user.last_name, user.email, function(err, result) {
			if(err) {
				if(err.code === 'ER_DUP_ENTRY') {
					res.send('A user with this email already exists');
				} else { 
					res.send('Error creating user: ' + JSON.stringify(err));
				}
			} else {
				res.send('Created user: ' + JSON.stringify(result));
			}
		});
	} else {
		res.send('Validation error, be sure to include first_name, last_name and email');
	}
}

module.exports = {
	'createUser': createUser
}
