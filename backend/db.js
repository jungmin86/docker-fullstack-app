const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'jungmin86',
    database: 'myapp'
});

exports.pool = pool;