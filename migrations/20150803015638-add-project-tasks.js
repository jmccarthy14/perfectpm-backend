var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('project_tasks', {
		project_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'project_tasks_projects_project_id_fk',
		        table: 'projects',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					project_id: 'id'
				}
			}
		},
		task_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'project_tasks_tasks_task_id_fk',
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
	db.dropTable('project_tasks', callback);
};
