var authService = require('../service/auth-service');
var ppmResponseWrapper = require('../../server/ppm-response');

function register(req, res) {
    console.log(req.body);
    authService.register(req.body.orgName, req.body.firstName, req.body.lastName, req.body.email, ppmResponseWrapper(res));
}

function login(req, res) {
    authService.login(req.params.email, ppmResponseWrapper(res));
}

module.exports = {
    'register': register,
    'login': login
};
