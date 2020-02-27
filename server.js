// import express
const express = require('express');
// import routers
const userRouter = require('./users/user-router.js')
const authRouter = require('./auth/auth-router.js')
// import dbConfig object if there is an endpoint here

// import global middleware
const restricted = require('./auth/restricted-middleware.js')
// create the server
const server = express()
// Introduce global middleware
server.use(express.json())
// add routes and specify url
server.use('/api/auth', authRouter)
server.use('/api/users', restricted, userRouter)
// endpoints

// export server
module.exports = server