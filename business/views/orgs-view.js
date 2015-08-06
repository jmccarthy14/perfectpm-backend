var orgsService = require('../service/orgs-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createOrg(req, res) {
	var name = req.body.name;
	orgsService.createOrg(name, ppmResponseWrapper(res));
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

module.exports = {
	'addProjectToOrg': addProjectToOrg,
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg,
	'getOrgProjects': getOrgProjects,
	'getOrgUsers': getOrgUsers
};
