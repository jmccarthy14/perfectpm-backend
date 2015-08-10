var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('task_list_tasks', {
		task_list_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'task_list_tasks_tasks_task_list_id_fk',
		        table: 'task_list',
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
				name: 'task_list_tasks_tasks_task_id_fk',
		        table: 'tasks',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					task_id: 'id'
				}
			}
		},
		priority: { 
			type: 'int', 
			notNull: true
		}
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('task_list_tasks', callback);
};
