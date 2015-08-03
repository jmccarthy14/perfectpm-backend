var orgService = require('../service/orgs-service');

function createOrg(req, res) {
	var name = req.body.name;
	orgService.createOrg(name, function(err, results) {
		if(err) {
			res.send('Error: ' + JSON.stringify(err));
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
}

module.exports = {
	'createOrg': createOrg
}
