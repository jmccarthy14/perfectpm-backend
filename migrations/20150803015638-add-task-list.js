var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('task_list', {
		id: { type: 'int', primaryKey: true, autoIncrement: true },
		org_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'orgs_task_list_fk',
		        table: 'orgs',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					org_id: 'id'
				}
			}
		}
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('task_list', callback);
};
