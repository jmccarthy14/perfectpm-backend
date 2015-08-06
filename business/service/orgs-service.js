var uuids = require('node-uuid');

var orgDao = require('../dao/orgs-mysql-dao');
var orgsUsersDao = require('../dao/orgs-users-mysql-dao');
var orgsProjectsDao = require('../dao/orgs-projects-mysql-dao');

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

function getOrgUsers(orgId, cb) {
	orgsUsersDao.getUsersByOrg(orgId, cb);
}

function addProjectToOrg(orgId, projectId, cb) {
	orgsProjectsDao.createOrgProject(orgId, projectId, cb);
}

function getOrgProjects(orgId, cb) {
	orgsProjectsDao.getProjectsByOrg(orgId, cb);
}

module.exports = {
	'addProjectToOrg': addProjectToOrg,
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg,
	'getOrgProjects': getOrgProjects,
	'getOrgUsers': getOrgUsers
}
