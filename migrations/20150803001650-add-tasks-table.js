var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('tasks', {
		id: { type: 'int', primaryKey: true },
		name: 'string'
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('tasks', callback);
};
