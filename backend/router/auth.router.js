var express = require('express')
var AuthService = require('../service/AuthService')
var jwt = require('jsonwebtoken');


let router = express.Router()

router.get('', (request, response) => {
    response.send('welcome to auth module')
})

router.post('/signin', (request, response) => {
    AuthService.signin(request.body).then((user) => {
        const responseData = AuthService.authResponse(user)
        response.send(responseData)
    }).catch((err) => {
        console.log(err)
    })
})

var isToken = (req, res, next) => {
    var token = req.headers['token']
    if (token) {
        jwt.verify(token, 'secret', (err, payload) => {
            if (err) {
                res.statusCode = 401
                res.json({
                    isError: true,
                    error: err
                });
            } else {
                req.tokenPayload = payload
                next();
            }
        })
    } else {
        res.statusCode = 403
        res.json({
            isError: true,
            msg: 'token not found'
        })
    }
}

var decoded = (req, res, next) => {
    var token = req.headers['token']

    if (token) {
        var a = jwt.decode(token, {complete: true})
        return Promise.resolve(a)
    } else {
        res.statusCode = 403;
        res.json({
            isError: true,
            msg: 'token not found'
        })
    }
}

router.get('/secured', isToken, (req, res) => {
    res.json({
        payload: req.tokenPayload
    })
})

router.get('/decode', decoded, (req, res) => {
    console.log(here)
    decoded.then((user) => {
        console.log('a', user)
        res.json({
            payload: user
        })
    })
    
})

router.get('/signup', (request, response) => {
    let inputs = request.query

    AuthService
        .signup(inputs)
        .then(result => {
            const responseData = AuthService.authResponse(result)
            response.status(200).send(responseData)
        })
        .catch(err => {
            response.status(400).send(err.message)
        })
})

module.exports = router;
