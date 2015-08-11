var userDao = require('../dao/users-mysql-dao');
var orgsService = require('./orgs-service');
var userService = require('./user-service');

function login(email, cb) {
    userDao.getUserByEmail(email, function(err, results) {
        if (err) {
            cb(err);
        } else {
            if (results) {
                cb(null, results);
            } else {
                cb(new Error('Invalid authentication details'));
            }
        }
    });
}

function register(orgName, firstName, lastName, email, cb) {
    var user = {
        first_name: firstName,
        last_name: lastName,
        email: email
    };

    orgsService.createOrg(orgName, function(err, orgResults) {
        if (err) {
            cb(err, orgResults);
        } else {
            var orgId = orgResults.insertId;
            userService.createUser(user, orgId, function(err, userResults) {
                if (err) {
                    cb(err, userResults);
                } else {
                    login(user.email, cb);
                }
            });
        }
    });
}

module.exports = {
    'register': register,
    'login': login
};
