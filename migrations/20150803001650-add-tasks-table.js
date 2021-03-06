var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('tasks', {
		id: { type: 'int', primaryKey: true, autoIncrement: true },
		name: { type: 'string' },
		description: { type: 'string'},
		estimate: 'int',
		created_by_user_id: { type: 'int', notNull: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('tasks', callback);
};
