var orgsService = require('../service/orgs-service');

function createOrg(req, res) {
	var name = req.body.name;
	orgsService.createOrg(name, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + json.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function addUserToOrg(req, res) {
	var orgId = req.params.orgId;
	var userId = req.params.userId;

	orgsService.addUserToOrg(orgId, userId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function addProjectToOrg(req, res) {
	var orgId = req.params.orgId;
	var projectId = req.params.projectId;

	orgsService.addProjectToOrg(orgId, projectId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function getOrgProjects(req, res) {
	var orgId = req.params.orgId;
	orgsService.getOrgProjects(orgId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function getOrgUsers(req, res) {
	var orgId = req.params.orgId;
	orgsService.getOrgUsers(orgId, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

module.exports = {
	'addProjectToOrg': addProjectToOrg,
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg,
	'getOrgProjects': getOrgProjects,
	'getOrgUsers': getOrgUsers
}
