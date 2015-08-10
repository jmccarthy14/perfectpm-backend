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

// users
app.get('/users/:userId', views.users.getUser);
app.get('/users/:userId/orgs', views.orgs.getUserOrgs);
app.post('/users', views.users.createUser);

// orgs
app.post('/orgs', views.orgs.createOrg);
app.get('/orgs/:orgId', views.orgs.getOrgById);
app.get('/orgs/:orgId/users', views.orgs.getOrgUsers);
app.get('/orgs/:orgId/users/:userId', views.orgs.getOrgUser);
app.post('/orgs/:orgId/users/:userId', views.orgs.addUserToOrg);
app.get('/orgs/:orgId/projects', views.orgs.getOrgProjects);

// tasks

app.post('/tasks', views.tasks.createTask);
app.put('/tasks/:taskId', views.tasks.updateTask);
app.get('/task_list/:taskListId', views.tasks.getTaskList);
app.post('/task_list/:taskListId/tasks/:taskId', views.tasks.addTaskToList);
app.put('/task_list/:taskListId/tasks/:taskId', views.tasks.updateTaskInList);

// projects
app.post('/projects', views.projects.createProject);
app.get('/projects/:projectId', views.projects.getProject);



module.exports = app;
