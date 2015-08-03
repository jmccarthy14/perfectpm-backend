var mysql = require('mysql');

// TODO(jmccarthy14@): Move to config, add users
var pool = mysql.createPool({
		connectionLimit: 10,
		host: 'localhost',
		database: 'ppm',
		user: 'root',
		password: ''
});

module.exports = pool;
