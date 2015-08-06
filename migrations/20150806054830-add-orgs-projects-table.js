var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('orgs_projects', {
		org_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'orgs_projects_orgs_org_id_fk',
		        table: 'orgs',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					org_id: 'id'
				}
			}
		},
		project_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'orgs_projects_projects_project_id_fk',
		        table: 'projects',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					project_id: 'id'
				}
			}
		}
	}, callback);

};

exports.down = function(db, callback) {
	db.dropTable('orgs_projects', callback);
};
