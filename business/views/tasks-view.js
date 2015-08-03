var tasksService = require('../service/tasks-service');

function createTask(req, res) {
	tasksService.createTask(req.body, function(err, results) {
		if(err) {
			res.status(400).send('error: ' + err.message);
		} else {
			res.send('OK! ' + JSON.stringify(results));
		}
	});
};

module.exports = {
	'createTask': createTask
};
