var pool = require('../../server/mysql-client');

function createUserTask(userId, taskId, priority, cb) {
    pool.getConnection(function onConnection(err, connection) {
        if(err) {
            cb(err);
        } else {
            connection.query('update users_tasks set priority = priority + 1 where user_id = ? and priority >= ?', [userId, priority], function(err, results) {
                connection.query('insert into users_tasks (user_id, task_id, priority) values (?,?,?)', [userId, taskId, priority], function(err, results2) {
                    connection.release();
                    cb(err, results2);
                });
            });
        }
    });
}

module.exports = {
    'createUserTask': createUserTask
};
