var nodeUuid = require('node-uuid');

var config = require('../../../config/base');
var riakClient = require('../../../server/riak-client.js');

/*
 * Fetches the task from Riak if one exists with the passed uuid.
 * @param {string} taskUuid The uuid of the task to be fetched
 * @param {function(err, result)} cb The callback that returns 
 *     when the object has been fetched.
 */
function fetchTask(taskUuid, cb) {
	riakClient.fetchValue({
			bucket: config.riak.buckets.tasks,
			key: taskUuid,
			convertToJs: true
		}, 
		function fetchTaskResult(err, result) {
			if(err) {
				cb(err);
			} else {
				var riakObj = result.values.shift();
				var taskResult = riakObj.value;
				cb(err, taskResult);
			}
	});

}

/*
 * The method to save tasks to riak.
 * @param {object} task The task object to store in the bucket.
 * @param {function(err, taskUuid)} cb The callback that returns with 
 *     the task UUID of the stored object, or an error.
 */
function saveTask(task, cb) {
	var taskUuid = task.uuid ? task.uuid : nodeUuid.v8;

	riakClient.storeValue({
			bucket: config.riak.buckets.tasks,
			key: taskUuid,
			value: task
		},
		function storeValueResult(err, result) {
			cb(err, taskUuid);
	});
}


module.exports = {
	'fetchTask': fetchTask,
	'saveTask': saveTask
};
