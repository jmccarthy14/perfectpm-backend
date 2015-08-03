var uuids = require('node-uuid');

var orgDao = require('../dao/org-mysql-dao');

function createOrg(name, cb) {
	if(typeof name === 'string') {
		orgDao.createOrg(uuids.v4(), name, cb);
	} else {
		cb(new Error('Invalid organization name'));
	}
}

function addUserToOrg(userUuid, orgUuid) {

}
