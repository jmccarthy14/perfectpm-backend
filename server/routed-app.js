var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var views = require('../business/views');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('root path');
});

app.get('/health', function (req, res) {
    res.send('OK!');
});

app.get('/users/:userId', views.users.getUser);
app.get('/users/:userId/tasks', views.users.getUserTasks);
app.post('/users/:userId/tasks/:taskId', views.users.addTaskToUser);
app.get('/users/:userId/orgs', views.orgs.getUserOrgs);
app.post('/users', views.users.createUser);

app.post('/orgs', views.orgs.createOrg);
app.get('/orgs/:orgId', views.orgs.getOrgById);
app.get('/orgs/:orgId/users', views.orgs.getOrgUsers);
app.post('/orgs/:orgId/users/:userId', views.orgs.addUserToOrg);
app.get('/orgs/:orgId/projects', views.orgs.getOrgProjects);
app.post('/orgs/:orgId/projects/:projectId', views.orgs.addProjectToOrg);

app.post('/tasks', views.tasks.createTask);

app.post('/projects', views.projects.createProject);
app.get('/projects/:projectId', views.projects.getProject);
app.get('/projects/:projectId/tasks', views.projects.getProjectWithTasks);

app.post('/projects/:projectId/tasks/:taskId', views.projects.addTaskToProject);


module.exports = app;
