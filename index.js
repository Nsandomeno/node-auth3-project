// import the server
const server = require('./server.js')
// setup the dynamic port
const PORT = process.env.PORT || 4000
// start the server
server.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
})