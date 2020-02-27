// import express 
const express = require('express')
// import user model
const Users = require('../users/user-model.js');
// bring in bcyrpt.js and JWT
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// bring in the secret object
const { jwtSecret } = require('../config/secrets.js')


// create the router 
const router = express.Router()
// endpoints
router.post('/register', (req, res) => {
    const user = req.body

    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    if (!user.username || !user.password || !user.department) {
        res.status(400).json({ err:"Please provide username, password, and dept." })
    } else {
        Users.add(user)
            .then((newUser) => {
                res.status(201).json({message:"Registered!", new_user: newUser})
            })
            .catch((error) => {
                res.status(500).json({ message:"Server failed to add user" })
            })
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({
                    message: `Welcome, ${user.username}!`,
                    token,
                })
            } else {
                res.status(401).json({ message:"You're username or password do not match!" })
            }
        })
        .catch(({name, message, stack}) => {
            res.status(500).json({ name: name, message: message, stack:stack })
        })
})
// Local Middleware
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, jwtSecret, options)
}

// export 
module.exports = router