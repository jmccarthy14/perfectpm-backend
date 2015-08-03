var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('users', {
		id: { type: 'int', primaryKey: true, autoIncrement: true },
		uuid: { type: 'string', notNull: true, unique: true },
		first_name: { type: 'string', notNull: true },
		last_name: { type: 'string', notNull: true },
		email: { type: 'string', notNull: true, unique: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('users', callback);
};
