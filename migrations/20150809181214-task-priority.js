var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.addColumn('users_tasks', 'priority', {type: 'int', notNull: true}, function() {
    db.addIndex('users_tasks', 'users_tasks_priorities', ['user_id', 'priority'], true, callback);  
  });
};

exports.down = function(db, callback) {
  db.removeIndex('users_tasks', 'users_tasks_priorities', function() {
      db.removeColumn('users_tasks', 'priority', callback);
  });
};
