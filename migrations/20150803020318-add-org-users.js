var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('org_users', {
		org_id: { type: 'int', primaryKey: true },
		user_id: { type: 'int', primaryKey: true }
	}, callback);

};

exports.down = function(db, callback) {
	db.dropTable('org_users', callback);
};
