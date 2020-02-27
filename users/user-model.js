// import config object
const db = require('../database/dbConfig.js');
// export your helper functions
module.exports = {
    // helper functions go here...
    find,
    findBy,
    findById,
    add
}

function find() {
    return db('users').select('id', 'username', 'department', 'password')
}

function add(user) {
    return db('users')
        .insert(user, 'id')
            .then((ids) => {
                const [id] = ids
                return findById(id)
            })
}

function findBy(filter) {
    return db('users')
            .select('id', 'username', 'department', 'password')
            .where(filter)
}

function findById(id) {
    return db('users')
            .select('id', 'username', 'department', 'password')
            .where({ id })
            .first()
}