var mysql = require('../fn/mysql-db')

exports.list = () => {
    const query = 'SELECT * FROM `user`'
    const users = mysql.load(query)
    return users
        .then(result => {
            console.log('result', result)
            const params = {
                template: 'user/index.ejs',
                users: result
            }
            return Promise.resolve(params)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

exports.delete = (email) => {
    const query = 'DELETE FROM `user` WHERE Email = "' + email + '"'
    const deleted = mysql.delete(query)
    return deleted
        .then(result => {
            return Promise.resolve(result)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

exports.resetPassword = (email) => {
    // sending email.
    return app.mailer.send('email', {
        to: email,
        subject: 'Reset password',
        otherProperty: 'Other Property'
      }, err => {
        if (err) {
          return Promise.reject('There was an error sending the email.')
        }

        return Promise.resolve('Email Sent.')
      });    
}
