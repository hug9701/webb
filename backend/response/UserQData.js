var data = require('../fn/mysql-db')

exports.register = (user) => {

    var sql = `INSERT INTO user (Email, PassWord, FullName, Address) VALUES ( '${user.email}', '${user.password}', '${user.fullname}', '${user.address}')`

    return data.insert(sql)
}
