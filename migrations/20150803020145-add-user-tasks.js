var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('users_tasks', {
		user_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'users_tasks_users_user_id_fk',
		        table: 'users',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					user_id: 'id'
				}
			}

		},
		task_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'users_tasks_tasks_task_id_fk',
		        table: 'tasks',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					task_id: 'id'
				}
			}

		}
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('users_tasks', callback);
};
