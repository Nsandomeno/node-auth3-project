// import express 
const express = require('express')
// import user model
const Users = require('./user-model.js');


// create the router 
const router = express.Router()

// endpoints
router.get('/', (req, res) => {
    Users.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch(({ name, message, stack}) => {
            res.status(500).json({name: name, message: message, stack: stack})
        })
})
// Local Middleware

// export 
module.exports = router