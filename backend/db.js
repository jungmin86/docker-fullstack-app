const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'docker-fullstack-mysql.cg1m58ylhmwv.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    password: 'jungmin86',
    database: 'myapp'
});

exports.pool = pool;