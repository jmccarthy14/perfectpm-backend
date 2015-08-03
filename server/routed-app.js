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

app.get('/tasks', views.tasks);

module.exports = app;
