
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      // unique identifier
      tbl.increments()
      // unique username
      tbl.string('username', 30)
        .notNullable() // required
        .unique() // enforces uniqueness
      // password
      tbl.string('password', 60)
        .notNullable() // required
      // department
      tbl.string('department', 40)
        .notNullable() // required
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
