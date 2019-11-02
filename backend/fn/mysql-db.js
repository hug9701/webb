var mysql = require('mysql')
var	q = require('q');

var configdb = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dbsitedaugia'
}

exports.load = function(sql) {
	var d = q.defer();

    var cn = mysql.createConnection(configdb);

	cn.connect((error) => {
		if (error) {
			console.log('err', error);
		} else {
			console.log('connection database success !')
		}
	});
	
	cn.query(sql, function (error, rows, fields) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(rows);
		}
		cn.end();
	});

	return d.promise;
}

exports.save = function(sql) {
	
    var cn = mysql.createConnection(configdb);

	cn.connect((error) => {
		if (error) {
			console.log(error);
		} else {
			console.log('connection database success !')
		}
	});

	cn.query(sql, function (error, value) {
		if (error) {
			console.log(error);
		} else {
			console.log(value);
		}

		cn.end();
	});
}


exports.insert = function (sql) {
	var d = q.defer();
	
	var cn = mysql.createConnection(configdb);

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(value.insertId);
		}

		cn.end();
	});

	return d.promise;	
}

exports.delete = function (sql) {
	var d = q.defer();
	
	var cn = mysql.createConnection(configdb);

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(value.affectedRows);
		}

		cn.end();
	});

	return d.promise;	
}