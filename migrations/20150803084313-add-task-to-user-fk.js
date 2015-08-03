var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.addForeignKey('tasks', 'users', 'tasks_users_users_id_fk',
		{
			'created_by_user_id': 'id'
		},
		{
			onDelete: 'CASCADE',
			onUpdate: 'RESTRICT'
	}, callback);
};

exports.down = function(db, callback) {
	db.removeForeignKey('tasks', 'tasks_users_users_id_fk', callback);
};
