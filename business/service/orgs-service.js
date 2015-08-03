var uuids = require('node-uuid');

var orgDao = require('../dao/orgs-mysql-dao');
var orgsUsersDao = require('../dao/orgs-users-mysql-dao');

function createOrg(name, cb) {
	if(typeof name === 'string') {
		orgDao.createOrg(uuids.v4(), name, cb);
	} else {
		cb(new Error('Invalid organization name'));
	}
}

function addUserToOrg(orgId, userId, cb) {
	orgsUsersDao.createOrgUser(orgId, userId, cb);
}

module.exports = {
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg
}
