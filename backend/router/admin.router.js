var express = require('express')
var UserService = require('../service/UserService')
var UserRoutes = require('./user.router')

let router = express.Router()

router.get('', (request, response) => {
    response.send('Welcome to admin board')
})

router.get('/requestes', (request, response) => {
    
})

router.use('/users', UserRoutes)

router.get('/categories', (request, response) => {

})

module.exports = router;
