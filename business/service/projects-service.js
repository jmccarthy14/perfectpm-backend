var projectsDao = require('../dao/projects-mysql-dao');

function createProject(project, cb) {
	if(project.orgId && project.name && project.description && project.createdByUserId) {
		projectsDao.createProject(project, cb);
	} else {
		cb(new Error('Project must have an orgId,  name, description, and createdByUserId'));
	}
}

module.exports = {
	'createProject': createProject
}
