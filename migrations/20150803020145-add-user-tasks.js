var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('users_tasks', {
		user_id: { type: 'int', primaryKey: true },
		task_id: { type: 'int', primaryKey: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('users_tasks', callback);
};
