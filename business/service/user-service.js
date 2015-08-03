var nodeUuid = require('node-uuid');
var userDao = require('../dao/users-mysql-dao');

function createUser(first_name, last_name, email, cb) {
	userDao.createUser(nodeUuid.v4(), first_name, last_name, email, function onCreate(err, result) {
		cb(err, result);		
	}); 
}	

module.exports = {
	'createUser': createUser
}
