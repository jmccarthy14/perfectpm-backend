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

app.post('/users', views.users.createUser);

app.post('/orgs', views.orgs.createOrg);

app.post('/orgs/:orgId/users/:userId', views.orgs.addUserToOrg);

app.post('/tasks', views.tasks.createTask);

app.post('/projects', views.projects.createProject);

app.post('/projects/:projectId/tasks/:taskId', views.projects.addTaskToProject);


module.exports = app;
