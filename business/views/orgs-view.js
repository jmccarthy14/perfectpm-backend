var orgService = require('../service/orgs-service');

function createOrg(req, res) {
	var name = req.body.name;
	orgService.createOrg(name, function(err, results) {
		if(err) {
			res.send('error: ' + json.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

function addUserToOrg(req, res) {
	var orgId = req.params.orgId;
	var userId = req.params.userId;

	orgService.addUserToOrg(orgId, userId, function(err, results) {
		if(err) {
			res.send('error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

module.exports = {
	'addUserToOrg': addUserToOrg,
	'createOrg': createOrg
}
