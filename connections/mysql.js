const mysql = require('mysql');
const connection = mysql.createPool({
    host: "108.179.193.84",
    user: "unite165_admin",
    password: "p@ssw0rd",
    database: "unite165_laravel",
    port: 3306

});

module.exports = connection;