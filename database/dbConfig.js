// import knex
const knex = require('knex');
// import the config object as db
const config = require('../knexfile.js');

// declare the environment
// const environment = process.env.NODE_ENV || 'development'
// the above does not work dynamically

// export based on the environment variable
module.exports = knex(config.development)