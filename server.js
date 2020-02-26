// import express
const express = require('express');
// import routers

// import dbConfig object if there is an endpoint here

// create the server
const server = express()
// Introduce global middleware
server.use(express.json())
// add routes and specify url

// endpoints

// export server
module.exports = server