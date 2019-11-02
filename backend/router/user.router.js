var express = require('express')
var UserService = require('../service/UserService')

let router = express.Router()

router.get('', (request, response) => {
    return UserService.list()
        .then(params => {
            return response.render('index', {
                title: 'Management users',
                content: params.template,
                users: params.users
            })
        })
        .catch(err => {
            return response.status(400).send(err)
        })
})

router.delete('/:email/delete', (request, response) => {
    const email = request.params.email
    return UserService.delete(email)
        .then(result => {
            return response.send('Delete success')
        })
        .catch(err => {
            return response.send(err)            
        })
})

router.put('/:email/reset-password', (request, response) => {
    const email = request.params.email
    return UserService.resetPassword(email)
        .then(result => {
            return response.send('Reset password success')
        })
        .catch(err => {
            return response.send(err)            
        })
})

module.exports = router;
