var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.addForeignKey('projects', 'orgs', 'projects_orgs_org_id_fk',
		{
			'org_id': 'id'
		},
		{
			onDelete: 'CASCADE',
			onUpdate: 'RESTRICT'
	}, callback);
};

exports.down = function(db, callback) {
	db.removeForeignKey('projects', 'projects_orgs_org_id_fk', callback);
};
