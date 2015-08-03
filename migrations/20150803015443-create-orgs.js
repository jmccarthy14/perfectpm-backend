var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('orgs', {
		id: { type: 'int', primaryKey: true, autoIncrement: true },
		name: { type: 'string', notNull: true },
		uuid: { type: 'string', notNull: true}
	}, callback);

};

exports.down = function(db, callback) {
	db.dropTable('orgs', callback);
};
