var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('orgs_users', {
		org_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'organizations_org_id_fk',
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
		user_id: { 
			type: 'int', 
			primaryKey: true,
			foreignKey: {
				name: 'organizations_user_id_fk',
		        table: 'users',
		        rules: {
					onDelete: 'CASCADE',
		            onUpdate: 'RESTRICT'
		        },
		        mapping: {
					user_id: 'id'
				}
			}	
		}
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('orgs_users', callback);
};
