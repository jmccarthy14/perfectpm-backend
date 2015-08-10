var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('projects', {
	  	id: { type: 'int', primaryKey: true, autoIncrement: true },
		org_id: { type: 'int', notNull: true },
		task_list_id: { type: 'int', notNull: true },
		name: { type: 'string', notNull: true },
		description: { type: 'string'},
		created_by_user_id: { type: 'int', notNull: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('projects', callback);
};
