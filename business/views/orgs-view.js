var orgsService = require('../service/orgs-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createOrg(req, res) {
	var name = req.body.name;
	orgsService.createOrg(name, ppmResponseWrapper(res));
}

function getOrgById(req, res) {
	var orgId = req.params.orgId;
	orgsService.getOrgById(orgId, ppmResponseWrapper(res));
}

function addUserToOrg(req, res) {
	var orgId = req.params.orgId;
	var userId = req.params.userId;

	orgsService.addUserToOrg(orgId, userId, ppmResponseWrapper(res));
}

function addProjectToOrg(req, res) {
	var orgId = req.params.orgId;
	var projectId = req.params.projectId;

	orgsService.addProjectToOrg(orgId, projectId, ppmResponseWrapper(res));
}

function getOrgProjects(req, res) {
	var orgId = req.params.orgId;
	orgsService.getOrgProjects(orgId, ppmResponseWrapper(res));
}

function getOrgUsers(req, res) {
	var orgId = req.params.orgId;
	orgsService.getOrgUsers(orgId, ppmResponseWrapper(res));
}

function getUserOrgs(req, res) {
	var userId = req.params.userId;
	orgsService.getUserOrgs(userId, ppmResponseWrapper(res));
}

module.exports = {
	'addProjectToOrg': addProjectToOrg,
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg,
	'getOrgById': getOrgById,
	'getOrgProjects': getOrgProjects,
	'getOrgUsers': getOrgUsers,
	'getUserOrgs': getUserOrgs
};
