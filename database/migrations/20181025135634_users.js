
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('users').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
