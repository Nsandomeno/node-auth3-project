// bring in the jwt library and the jwtSecret (from secrets.js)
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js');

// export the piece of middleware
module.exports = (req, res, next) => {
    // authorization is a standard property on headers object
    const { authorization } = req.headers

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message:"Invalid credentials." })
            } else {
                req.decodedToken = decodedToken

                next()
            }
        })
    } else {
        res.status(400).json({ message:"No credentials provided." })
    }
}