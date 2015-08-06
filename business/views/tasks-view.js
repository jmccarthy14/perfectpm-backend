var tasksService = require('../service/tasks-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function createTask(req, res) {
	tasksService.createTask(req.body, ppmResponseWrapper(res));
};

module.exports = {
	'createTask': createTask
};
