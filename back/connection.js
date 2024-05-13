const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password : '',
    database : 'gestion_absence',
    port : 3306
});

module.exports = connection ;   