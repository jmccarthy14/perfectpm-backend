var projectsService = require('../service/projects-service');

function createProject(req, res) {
	projectsService.createProject(req.body, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + err.message);
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
};

module.exports = {
	'createProject': createProject
};
