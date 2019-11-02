var express = require('express')
var userRepo = require('../response/UserQData')

var router = express.Router()

router.post('/register', (req, res) => {
    userRepo.register(req.body).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router;
